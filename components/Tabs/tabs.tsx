"use client";
import { useState } from "react";
import Image from "next/image";

export default function NavTabs() {

  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const getTabStyle = (tabName: string) => {
    return tabName === selectedTab
      ? "flex flex-col items-center gap-[5px] cursor-pointer text-defaultBlue"
      : "flex flex-col items-center gap-[5px] cursor-pointer text-white";
  };

  return (
    <div className="flex items-center gap-[90px]">
      <div
        className={getTabStyle("PASSENGER")}
        onClick={() => handleTabClick("PASSENGER")}
      >
        <Image src={"./nav/car.svg"} alt="passenger" width={20} height={15} />
        <p className="uppercase">passenger</p>
      </div>

      <div
        className={getTabStyle("DRIVER")}
        onClick={() => handleTabClick("DRIVER")}
      >
        <Image src={"./nav/driver.svg"} alt="driver" width={20} height={15} />
        <p className="uppercase">driver</p>
      </div>
    </div>
  );
}
