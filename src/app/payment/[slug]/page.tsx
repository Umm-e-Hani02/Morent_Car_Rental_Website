import Navbar from "@/components/Navbar";
import TopBar from "@/components/Topbar";
import { client } from "@/sanity/lib/client";
import { Star } from "lucide-react";
import LeftContainer from "../LeftContainer";
import Image from "next/image";
import Link from "next/link";

export default async function CarPayment({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == 'car' && slug.current == $slug][0]{
    name,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    "image_url":image.asset->url,
  }`;
  const payment = await client.fetch(query, { slug });

  if (!payment) {
    return (
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>
          <p className="text-2xl text-gray-800 mb-4">Oops! Page not found.</p>
          <p className="text-lg text-gray-600 mb-6">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 w-full">
      {/* Topbar */}
      <TopBar heading="High Fidelity Dashboard - Payment Car Rent" />
      {/* Navbar */}
      <Navbar />
      <div className="flex lg:flex-row mx-auto flex-col-reverse">
        <LeftContainer />

        <div className="mx-6 md:w-[570px] lg:h-[380px] bg-white rounded-lg p-6 lg:m-6 md:mx-auto mt-6">
          {/* Header */}
          <div className="mb-5">
            <h2 className="text-xl font-bold text-[#1A202C]">Rental Summary</h2>
            <p className="text-sm text-[#90A3BF]">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>

          <div>
            {/* Car Details */}
            <div className="flex items-center gap-4 mb-5">
              <div>
                <Image
                  src={payment.image_url}
                  alt={payment.name}
                  height={220}
                  width={220}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-[#1A202C]">
                  {payment.name}
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-2 mt-2">
                  <div className="flex text-yellow-400">
                    <Star className="h-5" fill="#FACC15" />
                    <Star className="h-5" fill="#FACC15" />
                    <Star className="h-5" fill="#FACC15" />
                    <Star className="h-5" fill="#FACC15" />
                    <Star className="text-gray-300 h-5" />
                  </div>
                  <p className="text-[14px] text-[#90A3BF] mr-4 md:ml-2 text-nowrap">
                    440+ Reviewer
                  </p>
                </div>
              </div>
            </div>

            {/* Subtotal & Tax */}
            <div className="border-t border-gray-200 pt-4 mb-5">
              <div className="flex justify-between text-sm text-[#1A202C] mb-2">
                <span className="text-[#90A3BF]">Subtotal</span>
                <span className="font-semibold">{payment.pricePerDay}</span>
              </div>
              <div className="flex justify-between text-sm text-[#1A202C]">
                <span className="text-[#90A3BF]">Tax</span>
                <span className="font-semibold">$0</span>
              </div>
            </div>

            {/* Total Rental Price */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#1A202C]">
                  Total Rental Price
                </h3>
                <span className="text-lg font-bold text-[#1A202C]">
                  {payment.pricePerDay}
                </span>
              </div>
              <p className="text-sm text-[#90A3BF]">
                Overall price and includes rental discount
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
