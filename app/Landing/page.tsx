import BaseButton from "@/components/Base/Button";
import LandingBox from "@/components/Landing/box";
import LandingCarousel from "@/components/Landing/carousel";
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
              withIcon={true}
            />
            <BaseButton
              variant="lightBlue"
              text="Become Driver"
              withIcon={true}
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
      <div className="pt-[20px] pb-[50px] flex items-center justify-between w-full px-[200px]  bg-lightGray">
        <LandingBox
          image="./landing/box-pic1.svg"
          title="offer your"
          description="Own Fare"
        />
        <LandingBox
          image="./landing/box-pic2.svg"
          title="hire"
          description="Chaueffeurs"
        />
        <LandingBox
          image="./landing/box-pic3.svg"
          title="free"
          description="Canelation"
        />
        <LandingBox
          image="./landing/box-pic4.svg"
          title="local or"
          description="Intercity Tides"
        />
      </div>

      <div className="pt-[50px] pb-[50px] flex flex-col items-center gap-[60px]">
        <h2 className="text-black text-[36px] font-semibold">
          Why We Are Better
        </h2>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-[24px] items-center text-center border-r-1 w-[30%]">
            <Image
              src="./landing/bank.svg"
              width={80}
              height={80}
              alt="landing image"
            />
            <h2 className="text-black text-[24px] font-semibold uppercase">
              Offer your fare
            </h2>
            <p className="text-black text-[18px] w-[220px]">
              Name your price while booking rides
            </p>
          </div>

          <div className="flex flex-col gap-[24px] items-center text-center border-r-1  w-[30%]">
            <Image
              src="./landing/car.svg"
              width={80}
              height={80}
              alt="landing image"
            />
            <h2 className="text-black text-[24px] font-semibold uppercase">
              Cheapest Luxury Cars
            </h2>
            <p className="text-black text-[18px] w-[270px]">
              Book luxury cars at ordinary price
            </p>
          </div>

          <div className="flex flex-col gap-[24px] items-center text-center  w-[30%]">
            <Image
              src="./landing/driver.svg"
              width={80}
              height={80}
              alt="landing image"
            />
            <h2 className="text-black text-[24px] font-semibold uppercase">
              Professional Chaueffeurs
            </h2>
            <p className="text-black text-[18px] w-[300px]">
              Book verified drivers with a minimum of five years of driving
              experience
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <BaseButton text="rider" variant="mixedBlue" withIcon={false} />
          <BaseButton text="driver" variant="white" withIcon={false} />
        </div>
      </div>

      <div className="bg-lightGray pt-[50px] pb-[50px] flex flex-col items-center gap-[60px]">
        <h2 className="text-black text-[36px] font-semibold">
          Our Booking Services
        </h2>
        <div className="flex items-center gap-[35px] justify-center w-full">
          <div className="flex flex-col gap-[24px] items-center text-center ">
            <Image
              src="./landing/local-rides.svg"
              width={400}
              height={240}
              alt="landing image"
            />
            <h2 className="text-black text-[24px] font-semibold uppercase">
              Local Rides
            </h2>
            <p className="text-black text-[18px] w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet
            </p>
            <BaseButton
              text="learn more"
              withIcon={true}
              variant="transparent"
            />
          </div>

          <div className="flex flex-col gap-[24px] items-center text-center ">
            <Image
              src="./landing/intercity-rides.svg"
              width={400}
              height={240}
              alt="landing image"
            />
            <h2 className="text-black text-[24px] font-semibold uppercase">
              Intercity Rides
            </h2>
            <p className="text-black text-[18px] w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet
            </p>
            <BaseButton
              text="learn more"
              withIcon={true}
              variant="transparent"
            />
          </div>

          <div className="flex flex-col gap-[24px] items-center text-center ">
            <Image
              src="./landing/hourly-driver.svg"
              width={400}
              height={240}
              alt="landing image"
            />
            <h2 className="text-black text-[24px] font-semibold uppercase">
              Hourly Driver
            </h2>
            <p className="text-black text-[18px] w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet
            </p>
            <BaseButton
              text="learn more"
              withIcon={true}
              variant="transparent"
            />
          </div>
        </div>
      </div>

      {/* <div className="bg-lightGray">
        <LandingCarousel />
      </div> */}
    </>
  );
}
