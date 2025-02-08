import Image from "next/image";
export default function DetailHero() {
  return (
    <div className="w-[305px] md:w-[470px] lg:w-[350px] xl:w-[470px] flex flex-col mx-auto">
      <Image
        src="/assets/category.png"
        alt=""
        height={520}
        width={520}
        className="w-[305px] md:h-[340px] md:w-[470px] lg:h-[280px] xl:h-[340px]"
      />
      <div className="flex gap-x-2 mt-5 xl:gap-x-5">
        <Image
          className="h-20 w-24 md:w-full md:h-28 lg:h-20 lg:w-28 xl:w-full xl:h-28"
          src="/assets/View1.png"
          alt=""
          height={550}
          width={550}
        />
        <Image
          className="h-20 w-24 md:w-full md:h-28 lg:h-20 lg:w-28 xl:w-full xl:h-28"
          src="/assets/View2.png"
          alt=""
          height={550}
          width={550}
        />
        <Image
          className="h-20 w-24 md:w-full md:h-28 lg:h-20 lg:w-28 xl:w-full xl:h-28"
          src="/assets/View3.png"
          alt=""
          height={550}
          width={550}
        />
      </div>
    </div>
  );
}
