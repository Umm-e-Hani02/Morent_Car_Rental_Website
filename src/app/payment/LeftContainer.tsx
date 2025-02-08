"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Swal from "sweetalert2";

export default function LeftContainer() {
  const [formValues, setFormValues] = useState({
    customername: "",
    phonenumber: "",
    address: "",
    city: "",
    orderdate: "",
    returndate: "",
    cardnumber: "",
    selectedcar: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCarChange = (value: string) => {
    setFormValues({ ...formValues, selectedcar: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);

    try {
      const response = await client.create({
        _type: "order",
        customername: formValues.customername,
        phonenumber: formValues.phonenumber,
        address: formValues.address,
        city: formValues.city,
        orderdate: formValues.orderdate,
        returndate: formValues.returndate,
        cardnumber: formValues.cardnumber,
        selectedcar: formValues.selectedcar,
      });

      console.log("User added successfully", response);
      Swal.fire({
        title: `Your payment has been successfully added!`,
        icon: "error",
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "text-black",
        },
      });
    } catch (error) {
      console.error("Error adding user", error);
      Swal.fire({
        title: `Something went wrong. Please try again!`,
        icon: "error",
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "text-black",
        },
      });
    }
  };

  return (
    <section className="w-full max-w-screen overflow-x-hidden md:mx-auto">
      <div className="mx-6 md:mx-auto">
        <div className="md:w-[570px] xl:w-[852px] bg-[#FFFFFF] rounded-lg lg:m-6 flex flex-col px-6 text-nowrap md:mx-24 my-6">
          {/* Billing */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 mt-6">
                <div>
                  <legend className="font-semibold text-[#1A202C]">Name</legend>
                  <Input
                    name="customername"
                    className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                    placeholder="Your name"
                    value={formValues.customername}
                    onChange={handleChange}
                    required
                  />
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
                    onChange={handleChange}
                    required
                  />
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
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <legend className="font-semibold text-[#1A202C]">City</legend>
                  <Input
                    name="city"
                    className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                    placeholder="Town or city"
                    value={formValues.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <legend className="font-semibold text-[#1A202C]">
                    Choose Selected Car
                  </legend>
                  <Select onValueChange={handleCarChange} required={true}>
                    <SelectTrigger className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px] text-gray-400">
                      <SelectValue placeholder="Selected car " />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Koenigsegg">Koenigsegg</SelectItem>
                      <SelectItem value="Nissan GT-R">Nissan GT-R</SelectItem>
                      <SelectItem value="Rolls-Royce">Rolls-Royce</SelectItem>
                      <SelectItem value="Tesla Model 3">
                        Tesla Model 3
                      </SelectItem>
                      <SelectItem value="Ford Mustang">Ford Mustang</SelectItem>
                      <SelectItem value="BMW X5">BMW X5</SelectItem>
                      <SelectItem value="Audi A6Audi A6">Audi A6</SelectItem>
                      <SelectItem value="Mercedes-Benz C-Class">
                        Mercedes-Benz C-Class
                      </SelectItem>
                      <SelectItem value="Porsche 911">Porsche 911</SelectItem>
                      <SelectItem value="Chevrolet Camaro">
                        Chevrolet Camaro
                      </SelectItem>
                      <SelectItem value="Nissan Altima">
                        Nissan Altima
                      </SelectItem>
                      <SelectItem value="CR-V">CR-V</SelectItem>
                      <SelectItem value="All New Terlos">
                        All New Terlos
                      </SelectItem>
                      <SelectItem value="MG ZX Exclusive">
                        MG ZX Exclusive
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <label className="font-semibold ml-3">Rental Period</label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <Input
                    name="orderdate"
                    type="date"
                    className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none"
                    value={formValues.orderdate}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="returndate"
                    type="date"
                    className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none"
                    value={formValues.returndate}
                    onChange={handleChange}
                    required
                  />
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
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <legend className="font-semibold">Expiration Date</legend>
                      <Input
                        type="date"
                        className="h-14 my-4 md:w-[230px] xl:w-[350px] text-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <legend className="font-semibold">CVC</legend>
                      <Input
                        placeholder="CVC"
                        className="h-14 my-4 md:w-[230px] xl:w-[350px]"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-[130px] h-14 rounded-xl"
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
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
