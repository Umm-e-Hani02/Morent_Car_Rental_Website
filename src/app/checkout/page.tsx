"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { Car } from "../types/Cars";
import { getBookingCar } from "../actions/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

export default function Checkout() {
  const [bookingItems, setBookingItems] = useState<Car[]>([]);

  const [formValues, setFormValues] = useState({
    customername: "",
    phonenumber: "",
    address: "",
    city: "",
    orderdate: "",
    returndate: "",
    cardnumber: "",
    expirationdate: "",
    cvc: "",
    bookingItems: ""
  });

  const [formErrors, setFormErrors] = useState({
    customername: false,
    phonenumber: false,
    address: false,
    city: false,
    orderdate: false,
    returndate: false,
    cardnumber: false,
    expirationdate: false,
    cvc: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      customername: !formValues.customername,
      phonenumber: !formValues.phonenumber,
      address: !formValues.address,
      city: !formValues.city,
      orderdate: !formValues.orderdate,
      returndate: !formValues.returndate,
      cardnumber: !formValues.cardnumber,
      expirationdate: !formValues.expirationdate,
      cvc: !formValues.cvc,

    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const orderData = {
      _type: "order",
      customername: formValues.customername,
      phonenumber: formValues.phonenumber,
      address: formValues.address,
      city: formValues.city,
      orderdate: formValues.orderdate,
      returndate: formValues.returndate,
      cardnumber: formValues.cardnumber,
      expirationdate: formValues.expirationdate,
      cvc: formValues.cvc,
      bookingItems: bookingItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
        // carImage: item.image_url,
      })),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");

      Swal.fire("Success", "Confirm payment successfully", "success");
    } catch (error) {
      console.error("Error creating order:", error);
      Swal.fire(
        "Error",
        "Failed to place the order. Please try again.",
        "error"
      );
    }
  };

  useEffect(() => {
    const bookedCars = getBookingCar();
    console.log("Booked Cars:", JSON.stringify(bookedCars, null, 2));
    setBookingItems(bookedCars);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row mx-auto flex-col-reverse">
        {/* Payment form */}
        <div className="w-full max-w-screen overflow-x-hidden md:mx-auto">
          <div className="mx-6 md:mx-auto">
            <div className="md:w-[570px] xl:w-[852px] bg-[#FFFFFF] rounded-lg lg:m-6 flex flex-col px-6 text-nowrap md:mx-24 my-6">
              {/* Billing */}
              <div>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 mt-6">
                    <div>
                      <legend className="font-semibold text-[#1A202C]">
                        Name
                      </legend>
                      <Input
                        name="customername"
                        className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                        placeholder="Your name"
                        value={formValues.customername}
                        onChange={handleInputChange}
                        required
                      />
                      {formErrors.customername && (
                        <p className="text-red-500 text-[12px]">
                          Name is required
                        </p>
                      )}
                    </div>
                    <div>
                      <legend className="font-semibold text-[#1A202C]">
                        Phone Number
                      </legend>
                      <Input
                        name="phonenumber"
                        className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                        placeholder="Phone Number"
                        value={formValues.phonenumber}
                        onChange={handleInputChange}
                        required
                      />
                      {formErrors.phonenumber && (
                        <p className="text-red-500 text-[12px]">
                          Phone number is required
                        </p>
                      )}
                    </div>
                    <div>
                      <legend className="font-semibold text-[#1A202C]">
                        Address
                      </legend>
                      <Input
                        name="address"
                        className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                        placeholder="Address"
                        value={formValues.address}
                        onChange={handleInputChange}
                        required
                      />
                      {formErrors.address && (
                        <p className="text-red-500 text-[12px]">
                          Address is required
                        </p>
                      )}
                    </div>
                    <div>
                      <legend className="font-semibold text-[#1A202C]">
                        City
                      </legend>
                      <Input
                        name="city"
                        className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                        placeholder="Town or city"
                        value={formValues.city}
                        onChange={handleInputChange}
                        required
                      />
                      {formErrors.city && (
                        <p className="text-red-500 text-[12px]">
                          City is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="mt-6">
                      <label className="font-semibold ml-3">
                        Rental Period
                      </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="orderdate"
                          type="date"
                          className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none"
                          value={formValues.orderdate}
                          onChange={handleInputChange}
                          required
                        />
                        {formErrors.orderdate && (
                          <p className="text-red-500 text-[12px] mt-1">
                            Order date is required
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          name="returndate"
                          type="date"
                          className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none"
                          value={formValues.returndate}
                          onChange={handleInputChange}
                          required
                        />
                        {formErrors.returndate && (
                          <p className="text-red-500 text-[12px] mt-1">
                            Return Date is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="xl:w-[804px] md:w-[530px] h-[560px] md:h-[308px] bg-[#F6F7F9] flex flex-col p-6 rounded-lg m-auto my-3">
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                          <legend className="font-semibold">Card Number</legend>
                          <Input
                            name="cardnumber"
                            className="h-14 my-4 md:w-[230px] xl:w-[350px]"
                            placeholder="Card number"
                            value={formValues.cardnumber}
                            onChange={handleInputChange}
                            required
                          />
                          {formErrors.cardnumber && (
                            <p className="text-red-500 text-[12px]">
                              Card number is required
                            </p>
                          )}
                        </div>
                        <div>
                          <legend className="font-semibold">
                            Expiration Date
                          </legend>
                          <Input
                            type="date"
                            name="expirationdate"
                            className="h-14 my-4 md:w-[230px] xl:w-[350px] text-gray-500"
                            value={formValues.expirationdate}
                            onChange={handleInputChange}
                            required
                          />
                          {formErrors.expirationdate && (
                            <p className="text-red-500 text-[12px]">
                              Expiration date is required
                            </p>
                          )}
                        </div>
                        <div>
                          <legend className="font-semibold">CVC</legend>
                          <Input
                            name="cvc"
                            placeholder="CVC"
                            className="h-14 my-4 md:w-[230px] xl:w-[350px]"
                            value={formValues.cvc}
                            onChange={handleInputChange}
                            required
                          />

                          {formErrors.cvc && (
                            <p className="text-red-500 text-[12px]">
                              CVC is required
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-[130px] h-14 rounded-xl"
                    onClick={handlePlaceOrder}
                  >
                    Confirm Payment
                  </Button>
                </form>

                <Image
                  src="/assets/layer.png"
                  alt="datasafe"
                  width={30}
                  height={30}
                  className="mt-5"
                />

                <div className="w-[548px] h-[52px] my-3">
                  <h3 className="text-[#1A202C] font-semibold">
                    All your data are safe
                  </h3>
                  <p className="w-[220px] md:w-[530px] xl:w-[804px] text-[#90A3BF] text-[12px] md:text-[14px] overflow-hidden text-wrap">
                    We are using the most advanced security to provide you the
                    best experience ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Summary */}
        <div className="mx-6 md:w-[570px] h-auto bg-white rounded-lg p-6 lg:m-6 md:mx-auto mt-6">
          {/* Header */}
          <div className="mb-5">
            <h2 className="text-xl font-bold text-[#1A202C]">Rental Summary</h2>
            <p className="text-sm text-[#90A3BF]">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>

          {/* Booking Items */}
          <div>
            {bookingItems.map((car) => (
              <div key={car._id} className="border-b border-gray-200 pb-5 mb-5">
                {/* Car Details */}
                <div className="flex flex-col md:flex-row items-center md:gap-4 gap-2">
                  <Image
                    src={car.image_url}
                    alt={car.name}
                    height={100}
                    width={100}
                    className="object-cover"
                  />
                  <div className="flex flex-col md:flex-row md:justify-between w-full">
                    <h2 className="text-lg md:text-xl font-bold text-[#1A202C] text-center md:text-start ">
                      {car.name}
                    </h2>
                    <span className="font-semibold text-gray-500 mt-1 text-sm text-center md:text-right ">
                      {car.pricePerDay}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Rental Price */}
          <div className="mt-5">
            <p className="text-sm text-[#90A3BF]">
              Overall price and includes rental discount
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
