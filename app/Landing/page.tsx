import BaseButton from "@/components/Base/Button";
import LandingBox from "@/components/Landing/box";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <div className="px-[200px] pt-[200px] bg-landing-pattern h-[950px] bg-no-repeat bg-contain flex items-start justify-between bg-lightGray">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-[65px] font-bold ">
            Book <span className="text-defaultBlue">Luxury Cars</span> <br /> at
            Your Price
          </h2>
          <div className="flex items-center gap-[15px] pt-[70px]">
            <BaseButton
              variant="lightBlue"
              text="I Need Ride"
              withIcon="true"
            />
            <BaseButton
              variant="lightBlue"
              text="Become Driver"
              withIcon="true"
            />
          </div>
        </div>
        <div>
          <img src="./landing-image.png" alt="" />
        </div>
      </div>

      <Image
        src="./arrow-bottom.svg"
        alt="srrow bottom"
        width={50}
        height={50}
        className="cursor-pointer absolute right-[50%] left-50 bottom-0 top-[850px]"
      />

      <div className="pt-[20px] flex items-center justify-between w-full px-[200px]  bg-lightGray">
        <LandingBox
          image="./landing-box/box-pic1.svg"
          title="offer your"
          description="Own Fare"
        />
        <LandingBox
          image="./landing-box/box-pic2.svg"
          title="hire"
          description="Chaueffeurs"
        />
        <LandingBox
          image="./landing-box/box-pic3.svg"
          title="free"
          description="Canelation"
        />
        <LandingBox
          image="./landing-box/box-pic4.svg"
          title="local or"
          description="Intercity Tides"
        />
      </div>
    </>
  );
}
