"use client";
import Navbar from "@/components/Navbar";
import { Car } from "../types/Cars";
import { useState, useEffect } from "react";
import { getBookingCar, removeFromBooking } from "../actions/action";
import Swal from "sweetalert2";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function Booking() {
  const [bookingItems, setBookingItems] = useState<Car[]>([]);

  useEffect(() => {
    const bookings = getBookingCar();
    setBookingItems(bookings);
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this booking!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromBooking(id);
        setBookingItems((prevItems) =>
          prevItems.filter((car) => car._id !== id)
        );
        Swal.fire(
          "Booking removed!",
          "Your booking has been removed.",
          "success"
        );
      }
    });
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Processing your booking",
      text: "Please wait a moment...",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Proceed",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your order has been successfully added",
          "success"
        );
        setBookingItems([]);
        router.push("/checkout");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-start mb-6 border-b pb-3">
            Your Bookings
          </h2>
          {bookingItems.length === 0 ? (
            <p className="text-gray-600 text-start mt-4">No bookings yet.</p>
          ) : (
            <>
              <div className="space-y-4">
                {bookingItems.length > 0
                  ? bookingItems.map((car) => (
                      <div
                        key={car._id}
                        className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg shadow p-4 hover:shadow-lg transition-transform transform"
                      >
                        <div>
                          {car.image_url && (
                            <Image
                              src={urlFor(car.image_url).url()}
                              alt={car.name}
                              height={120}
                              width={120}
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1 text-left sm:text-center">
                          <h3 className="text-xl font-semibold text-gray-800 w-full">
                            {car.name}
                          </h3>
                          <p className="text-gray-500 text-sm font-semibold">
                            Type: {car.type}
                          </p>
                          <p className="text-gray-500 text-sm font-semibold">
                            Price: {car.pricePerDay}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemove(car._id)}
                          className="mt-3 sm:mt-0 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-all"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ))
                  : null}
              </div>

              {/* Proceed Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleProceed}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
