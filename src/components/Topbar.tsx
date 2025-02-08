import Image from "next/image";
import { CalendarPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const TopBar = ({ heading }: { heading: string }) => {
  return (
    <section className="max-w-[1440px] w-full h-auto md:h-[141px] bg-white text-black flex flex-col lg:flex-row lg:justify-between lg:items-center px-6">
      {/* Left Section (Logo + Heading) */}
      <div className="flex flex-1 items-center gap-3 mt-6 md:mt-0">
        {/* Logo */}
        <div className="h-8 w-8">
          <Image
            src="/assets/command.png"
            alt="logo"
            height={200}
            width={200}
          />
        </div>
        {/* Heading */}
        <h1 className="text-xl md:text-3xl font-bold leading-tight md:whitespace-nowrap break-words">
          {heading}
        </h1>
      </div>

      {/* Right Section (Calendar Icon) */}
      <div className="ml-auto mt-4 lg:mt-0 md:hidden">
        <Link href="/booking">
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-11 w-11 text-[#596780] border-none"
          >
            <CalendarPlus className="h-11 w-14" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default TopBar;
