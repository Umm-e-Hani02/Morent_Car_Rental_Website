"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, SlidersHorizontalIcon } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

interface Car {
  id: string;
  name: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  imageUrl: string;
  slug: string;
}

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [carData, setProductData] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  // Fetch cars from Sanity
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const cars: Car[] = await client.fetch(
          `*[_type=="car"]{
            _id,
           name,
           type,
           fuelCapacity,
           transmission,
           seatingCapacity,
           pricePerDay,
           originalPrice,
           "imageUrl":image.asset->url,
           "slug": slug.current
          }`
        );
        setProductData(cars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  // Filter cars based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCars([]);
    } else {
      const results = carData.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCars(results);
    }
  }, [searchQuery, carData]);

  return (
    <div className="lg:w-[550px]">
      <div className="relative">
        <Search className="absolute mt-3 ml-5 text-[#596780]" />
        <Input
          placeholder="Search Car Here..."
          className="w-full h-11 rounded-full pl-12 pr-12"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SlidersHorizontalIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#596780]" />
      </div>

      {/* Display filtered products */}
      {searchQuery && (
        <ul className="absolute lg:w-[550px] max-h-60 bg-gray-100 backdrop-blur-lg shadow-2xl mt-2 overflow-y-auto z-50 p-3 border border-gray-100">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <li
                key={car.id}
                className="p-5 flex items-center justify-between bg-white rounded-xl shadow-md transition-all duration-200 hover:shadow-lg my-4 border border-gray-200"
              >
                {/* Car Details */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-black font-semibold md:text-lg">
                    {car.name}
                    <span className="block text-gray-400 text-sm font-medium">
                      {car.type}
                    </span>
                  </h2>
                  <Link href={`/detail/${car.slug}`}>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-xs md:text-sm px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                      Rent Now
                    </Button>
                  </Link>
                </div>

                {/* Car Image */}
                <div className="w-[130px] h-[90px] flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105">
                  <Image
                    src={car.imageUrl}
                    alt={car.name}
                    height={90}
                    width={120}
                    className="object-cover"
                  />
                </div>
              </li>
            ))
          ) : (
            <li className="p-5 text-center text-gray-400 font-medium text-lg">
              🚗 No cars available!
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
