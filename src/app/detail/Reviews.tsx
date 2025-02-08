import Image from "next/image";
import { Star, ChevronDown } from "lucide-react";

export default function Reviews() {
  return (
    <div className="max-w-[1016px] w-[300px] md:w-[470px] lg:w-[720px] xl:w-[975px] bg-white p-2 md:p-5 rounded-lg lg:mx-5 mx-auto mb-7">
      <div className="flex flex-col">
        <div className="hidden lg:flex lg:flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 mb-5">
            <p className="text-xl font-semibold text-[#1A202C]">Reviews</p>
            <div className="bg-[#3563E9] w-11 h-7 text-white flex items-center justify-center rounded">
              13
            </div>
          </div>

          {/* First Review */}
          <div className="max-w-[968px] mb-5 mt-5">
            <div className="flex items-center gap-5">
              {/* User Image */}
              <Image
                src="/assets/image.png"
                alt="Alex Stanton"
                height={45}
                width={45}
                className="h-11 w-11"
              />

              {/* User Details */}
              <div className="flex flex-col">
                <h3 className="font-bold text-xl text-[#1A202C]">
                  Alex Stanton
                </h3>
                <span className="text-[#90A3BF]">CEO at Bukalapak</span>
              </div>

              {/* Date and Rating */}
              <div className="ml-auto flex flex-col items-end">
                <span className="text-[#90A3BF] text-sm">21 July 2024</span>
                <div className="flex items-center text-yellow-400 gap-1 mt-1">
                  <Star fill="#FACC15" />
                  <Star fill="#FACC15" />
                  <Star fill="#FACC15" />
                  <Star fill="#FACC15" />
                  <Star className="text-gray-300" />
                </div>
              </div>
            </div>
            <p className="text-[#596780] text-sm mt-2">
              We are very happy with the service from the MORENT app Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </p>
          </div>
          {/* Second Review */}
          <div className="w-full max-w-[968px] mt-5">
            <div className="flex items-center gap-5">
              {/* User Image */}
              <Image
                src="/assets/profile.png"
                alt="Skylar Dias"
                height={800}
                width={800}
                className="h-12 w-12"
              />

              {/* User Details */}
              <div className="flex flex-col">
                <h3 className="font-bold text-xl text-[#1A202C]">
                  Skylar Dias
                </h3>
                <span className="text-[#90A3BF]">CEO at Amazon</span>
              </div>

              {/* Date and Rating */}
              <div className="ml-auto flex flex-col items-end">
                <span className="text-[#90A3BF] text-sm">20 July 2024</span>
                <div className="flex items-center text-yellow-400 gap-1 mt-1">
                  <Star fill="#FACC15" />
                  <Star fill="#FACC15" />
                  <Star fill="#FACC15" />
                  <Star fill="#FACC15" />
                  <Star className="text-gray-300" />
                </div>
              </div>
            </div>
            <p className="text-[#596780] text-sm mt-2">
              We are greatly helped by the services of the MORENT Application.
              Morent has low prices and also a wide variety of cars with good
              and comfortable facilities. In addition, the service provided by
              the officers is also very friendly and very polite.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div className="lg:hidden bg-white rounded-lg p-2">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <p className="text-xl font-semibold text-[#1A202C]">Reviews</p>
          <div className="bg-[#3563E9] w-11 h-7 text-white flex items-center justify-center rounded-lg">
            13
          </div>
        </div>

        {/* First Review */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            {/* User Image */}
            <Image
              src="/assets/image.png"
              alt="Alex Stanton"
              height={45}
              width={45}
              className="h-11 w-11"
            />

            {/* User Details */}
            <div className="flex flex-col">
              <h3 className="font-bold text-base text-[#1A202C]">
                Alex Stanton
              </h3>
              <span className="text-sm text-[#90A3BF]">CEO at Bukalapak</span>
            </div>

            {/* Date and Rating */}
            <div className="ml-auto flex flex-col items-end">
              <span className="text-sm text-[#90A3BF]">21 July 2024</span>
              <div className="flex items-center text-yellow-400 gap-1 mt-1">
                <Star fill="#FACC15" className="h-4 w-4" />
                <Star fill="#FACC15" className="h-4 w-4" />
                <Star fill="#FACC15" className="h-4 w-4" />
                <Star fill="#FACC15" className="h-4 w-4" />
                <Star className="text-gray-300 h-4 w-4" />
              </div>
            </div>
          </div>
          <p className="text-[#596780] text-sm tracking-tighter mt-3 pl-14">
            We are very happy with the service from the MORENT App. Morent has a
            low price...
          </p>
        </div>

        {/* Second Review */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            {/* User Image */}
            <Image
              src="/assets/profile.png"
              alt="Skylar Dias"
              height={800}
              width={800}
              className="h-12 w-12"
            />

            {/* User Details */}
            <div className="flex flex-col">
              <h3 className="font-bold text-base text-[#1A202C]">
                Skylar Dias
              </h3>
              <span className="text-sm text-[#90A3BF]">CEO at Amazon</span>
            </div>

            {/* Date and Rating */}
            <div className="ml-auto flex flex-col items-end">
              <span className="text-sm text-[#90A3BF]">20 July 2024</span>
              <div className="flex items-center text-yellow-400 gap-1 mt-1">
                <Star fill="#FACC15" className="h-4 w-4" />
                <Star fill="#FACC15" className="h-4 w-4" />
                <Star fill="#FACC15" className="h-4 w-4" />
                <Star fill="#FACC15" className="h-4 w-4" />
                <Star className="text-gray-300 h-4 w-4" />
              </div>
            </div>
          </div>
          <p className="text-[#596780] text-sm tracking-tighter mt-3 pl-14">
            We are greatly helped by the services of the MORENT Application.
            Morent has low...
          </p>
        </div>

        {/* Show All Button */}
        <div className="flex justify-center items-center mt-6">
          <button className="text-[#90A3BF] flex items-center gap-1 hover:text-[#7e90aa]">
            Show All <ChevronDown />
          </button>
        </div>
      </div>

      <div className="lg:flex justify-center items-center mt-10 hidden">
        <p className="text-[#90A3BF] flex cursor-pointer hover:text-[#7e90aa]">
          Show All <ChevronDown />
        </p>
      </div>
    </div>
  );
}
