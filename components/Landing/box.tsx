import Image from "next/image";

interface LandingBox {
  image: string;
  title: string;
  description: string;
}

export default function LandingBox({ image, title, description }: LandingBox) {
  return (
    <>
      <div className="px-[25px] py-[20px] w-[300px] flex items-center gap-[15px] rounded-sm bg-white">
        <Image src={image} alt="box image" width={53} height={60}/>
        <div className="flex flex-col items-start">
          <p className="text-defaultBlue">{title}</p>
          <h2 className="text-black">{description}</h2>
        </div>
      </div>
    </>
  );
}
