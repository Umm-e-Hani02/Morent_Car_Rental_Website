// 'use client'
// import { addToBooking } from "@/app/actions/action";
// import { Car } from "@/app/types/Cars";
// import { Button } from "./ui/button";
// import Swal from "sweetalert2";

// export function Button1({ value, car }: { value: string; car: Car }) {
//     const handleBooking = (e: React.MouseEvent) => {
//         e.preventDefault();
//         Swal.fire({
//             title: `Car added to your booking list!`,
//             icon: 'success',
//             position: 'center',
//             showConfirmButton: false,
//             timer: 2000,
//             customClass: {
//                 popup: "text-black"
//             }
//         });
//         addToBooking(car); 
//     };

//     return (
//         <Button
//             onClick={handleBooking}
//             className="bg-gradient-to-r from-blue-500 to-purple-600 text-xs md:text-base w-[130px] h-9 md:h-11 rounded-md text-center text-white hover:scale-110 shadow-lg hover:shadow-xl transition-transform duration-200 ease-in-out"
//         >
//             {value}
//         </Button>
//     );
// }


'use client'
import { addToBooking } from "@/app/actions/action";
import { Car } from "@/app/types/Cars";
import { Button } from "./ui/button";
import Swal from "sweetalert2";

export function Button1({ value, car }: { value: string; car: Car }) {
    const handleBooking = (e: React.MouseEvent) => {
        e.preventDefault();
        Swal.fire({
            title: `Car added to your booking list!`,
            icon: "success",
            position: "center",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                popup: "text-black"
            }
        });
        addToBooking(car); 
    };

    return (
        <Button
            onClick={handleBooking}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-xs md:text-base w-[130px] h-9 md:h-11 rounded-md text-center text-white hover:scale-110 shadow-lg hover:shadow-xl transition-transform duration-200 ease-in-out"
        >
            {value}
        </Button>
    );
}
