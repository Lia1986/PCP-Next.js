import NavTabs from "../Tabs/tabs";
import Image from "next/image";
export default function navbar() {
  return (
    <div className="w-full bg-navbar-gradient  px-[200px] py-[15px] flex justify-between items-center absolute z-30">
      <img src="./logo.svg" alt="" />
      <div>
        <NavTabs />
      </div>
      <div className="flex flex-col items-center gap-[10px] cursor-pointer">
        <Image src={"./menu.svg"} alt="passenger" width={30} height={30} />
        <p className="uppercase">menu</p>
      </div>
    </div>
  );
}
