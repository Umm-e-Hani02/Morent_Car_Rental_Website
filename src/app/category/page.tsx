import TopBar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ResponsiveNavbar from "./CategoryResponsiveNavbar";
import CategoryCar from "./CategoryCar";
export default function Category() {
  return (
    <section className="overflow-x-hidden">
      {/* TopBar */}
      <TopBar heading="High Fidelity Dashboard - Category Car Rent" />

      {/* Navbar */}
      <div className="hidden lg:flex">
        <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* SideNavbar */}
        <Sidebar />
        <ResponsiveNavbar />

        <CategoryCar />
      </div>
    </section>
  );
}
