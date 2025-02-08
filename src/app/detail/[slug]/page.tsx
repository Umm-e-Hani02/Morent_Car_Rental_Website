import TopBar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DetailHero from "../DetailHero";
import Reviews from "../Reviews";
import ResponsiveNavbar from "../DetailResponsiveNavbar";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Star } from "lucide-react";
import { Button1 } from "@/components/Button";
export default async function CarDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == 'car' && slug.current == $slug][0]{
        _id,
        name,
        type,
        transmission,
        fuelCapacity,
        seatingCapacity,
        pricePerDay,
        customerReviews,
        "slug": slug.current
        }`;
  const detail = await client.fetch(query, { slug });

  // Handle car not found
  if (!detail) {
    return (
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
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
    <section className="w-full max-w-screen overflow-x-hidden">
      <TopBar heading="High Fidelity Dashboard - Detail Car Rent" />
      <div className="hidden md:flex">
        <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <ResponsiveNavbar />

        <div className="flex flex-col mx-auto">
          <div className="flex flex-col lg:flex-row mb-10 gap-x-3 md:mx-4 mt-5">
            <DetailHero />
            <div className="w-[280px] md:w-[470px] lg:w-[350px] xl:w-[492px] h-[450px] lg:h-[385px] xl:h-[470px] rounded-lg bg-[#FFFFFF] p-2 md:p-4 mx-3 md:mx-0 mt-5 lg:mt-0">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold lg:text-3xl text-2xl">
                    {detail.name}
                  </h2>
                  <div className="flex items-center text-yellow-400 gap-1 mt-1">
                    <Star fill="#FACC15" className="h-5" />
                    <Star fill="#FACC15" className="h-5" />
                    <Star fill="#FACC15" className="h-5" />
                    <Star fill="#FACC15" className="h-5" />
                    <Star className="text-gray-300 h-5" />
                    <span className="text-[#596780] lg:text-base text-sm">
                      440+ Reviewer
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[#596780] xl:leading-10 xl:text-xl pt-6 text-lg leading-7">
                {detail.customerReviews}
              </p>

              <div className="w-[444px] h-[72px] flex my-6 lg:mt-2 xl:my-6 gap-x-2 md:gap-x-24 lg:gap-x-6 xl:gap-x-10">
                <div className="w-[130px] md:w-[170px] lg:w-[150px] xl:w-[200px] h-[72px]">
                  <p className="flex justify-between text-sm md:text-base">
                    <span className="xl:text-xl text-[#90A3BF]">Type Car</span>
                    <span className="xl:text-xl text-[#596780] font-semibold text-end">
                      {detail.type}
                    </span>
                  </p>

                  <p className="flex justify-between text-sm md:text-base">
                    <span className="xl:text-xl text-[#90A3BF]">Steering</span>
                    <span className="xl:text-xl text-[#596780] font-semibold text-end">
                      {detail.transmission}
                    </span>
                  </p>
                </div>

                <div className="w-[130px] md:w-[170px] lg:w-[150px] xl:w-[200px] h-[72px]">
                  <p className="flex justify-between text-sm md:text-base">
                    <span className="xl:text-xl text-[#90A3BF]">Capacity</span>
                    <span className="xl:text-xl text-[#596780] font-semibold text-end">
                      {detail.seatingCapacity}
                    </span>
                  </p>
                  <p className="flex justify-between text-sm md:text-base">
                    <span className="xl:text-xl text-[#90A3BF]">Gasoline</span>
                    <span className="xl:text-xl text-[#596780] font-semibold text-end">
                      {detail.fuelCapacity}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-12 lg:-mt-8 xl:mt-7">
                <div>
                  <p className="text-[#1A202C] text-2xl font-bold">
                    {detail.pricePerDay}
                  </p>
                  <del className="text-[#90A3BF] text-sm">
                    {detail.originalPrice}
                  </del>
                </div>
                <div>
                  <Button1 value={"Add to booking"} car={detail} />
                </div>
              </div>
            </div>
          </div>
          <Reviews />
        </div>
      </div>
    </section>
  );
}
