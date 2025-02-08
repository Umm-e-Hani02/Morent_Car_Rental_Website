import TopBar from "../../components/Topbar";
import Navbar from "@/components/Navbar";
import PopularCars from "./PopularCars";
import RecommendedCars from "./RecommendedCars";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function HomePage() {
  return (
    <section className="max-w-[1440px] overflow-x-hidden">
      {/* TopBar */}
      <TopBar heading="High Fidelity Dashboard - Home Car Rent" />

      {/* Navbar */}
      <Navbar />

      {/* Catalogue */}
      <div className="m-auto">
        <PopularCars />
        <RecommendedCars />

        <Link href="/category">
          <Button className="w-[156px] h-11 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded flex mx-auto my-4 md:mb-6">
            Show More Car
          </Button>
        </Link>
      </div>
    </section>
  );
}
