import { Button } from "@nextui-org/button";

interface BaseButtonProps {
  text: string;
  variant: "lightBlue" | "mixedBlue" | "white" | "gray" | "transparent";
  withIcon: boolean | string;
}

export default function BaseButton({
  text,
  variant,
  withIcon,
}: BaseButtonProps) {
  const colorClasses: Record<typeof variant, string> = {
    lightBlue:
      "bg-[#34CDFD] text-white w-[248px] uppercase text-[18px] font-bold h-[50px] rounded-sm",
    mixedBlue:
      "bg-[linear-gradient(165deg,_rgba(5,87,173,1)_52%,_rgba(11,166,212,1)_100%)] rounded-sm text-white w-[248px] uppercase text-[18px] font-bold h-[50px]",
    white:
      "bg-white text-[#2488C9] w-[248px] border-[#2488C9] border-2 rounded-sm uppercase text-[18px] font-bold h-[50px]",
    gray: "bg-gray-500 text-white",
    transparent:
      "bg-unset text-black uppercase text-[16px] font-semibold  w-[200px]",
  };

  const colorClass = colorClasses[variant];

  return (
    <div>
      <Button radius="none" className={colorClass}>
        {text}
        <div className="absolute right-5 ">
          {withIcon === true && variant !== "transparent" && (
            <img src="./arrow-right.svg" alt="" />
          )}
          {withIcon === true && variant === "transparent" && (
            <img src="./arrow-right-black.svg" alt="" />
          )}
        </div>
      </Button>
    </div>
  );
}
