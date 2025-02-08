import { Car } from "../types/Cars";

export const addToBooking = (car: Car) => {
  const booking: Car[] = JSON.parse(localStorage.getItem("booking") || "[]");

  const existingCar = booking.some((item) => item._id === car._id);

  if (!existingCar) {
    booking.push(car);
  }

  localStorage.setItem("booking", JSON.stringify(booking));
};

export const removeFromBooking = (carId: string) => {
  let booking: Car[] = JSON.parse(localStorage.getItem("booking") || "[]");
  booking = booking.filter((item) => item._id !== carId);
  localStorage.setItem("booking", JSON.stringify(booking));
};

// export const updateBookingQuantity = (carId: string,  quantity: number) => {
//     const booking: Car[] = JSON.parse(localStorage.getItem('booking') || '[]')
//     const carIndex = booking.findIndex(item => item._id === carId);

//     if(carIndex > -1){
//         booking[carIndex].inventory = quantity
//     }
// }

export const getBookingCar = (): Car[] => {
    return JSON.parse(localStorage.getItem('booking') || '[]');
}