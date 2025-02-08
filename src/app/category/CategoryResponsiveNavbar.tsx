import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import Searchbar from "@/components/Searchbar";
import Profile from "@/components/Profile";
export default function ResponsiveNavbar() {
  return (
    <nav className="max-w-screen w-full h-[200px] bg-white flex flex-col lg:hidden">
      <div className="flex items-center justify-between w-full px-6 pt-4">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-gray-500" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="overflow-y-auto overflow-x-hidden"
          >
            <div>
              {/* Type */}
              <div className="w-[176px] h-[352px] pt-9">
                <p className="text-[#90A3BF] font-semibold text-[12px]">TYPE</p>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    Sport <span className="text-[#90A3BF]">(10)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    SUV <span className="text-[#90A3BF]">(12)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    MPV <span className="text-[#90A3BF]">(16)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    Sedan <span className="text-[#90A3BF]">(20)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    Coupe <span className="text-[#90A3BF]">(14)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    Hatchback <span className="text-[#90A3BF]">(14)</span>
                  </p>
                </div>
              </div>

              {/* Capacity */}

              <div className="w-[176px] h-[240px]">
                <p className="text-[#90A3BF] font-semibold text-[12px]">
                  CAPACITY
                </p>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    2 Person <span className="text-[#90A3BF]">(10)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    4 Person <span className="text-[#90A3BF]">(14)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    6 Person <span className="text-[#90A3BF]">(12)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[18px] md:text-[20px] text-[#596780]">
                    8 or More <span className="text-[#90A3BF]">(16)</span>
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="w-[296px] h-[104px]">
                <p className="text-[#90A3BF] font-semibold text-[12px]">
                  PRICE
                </p>
                <div className="my-4">
                  <Slider className="w-48 md:w-full" />
                </div>
                <p className="text-[#596780] font-semibold text-[18px] md:text-[20px]">
                  Max. $100.00
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Profile */}
        <Profile />
      
      </div>
      <div className="pt-4">
        <h1 className="text-[#3563E9] text-3xl font-bold pl-6">MORENT</h1>
      </div>
      <div className="px-2 pt-5 mx-auto">
        <Searchbar />
      </div>
    </nav>
  );
}
