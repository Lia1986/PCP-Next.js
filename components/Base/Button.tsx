import { Button } from "@nextui-org/button";

interface BaseButtonProps {
  text: string;
  variant: "lightBlue" | "mixedBlue" | "transparent" | "gray" | "warning";
  withIcon: boolean | string;
}

export default function BaseButton({
  text,
  variant,
  withIcon,
}: BaseButtonProps) {
  const colorClasses: Record<typeof variant, string> = {
    lightBlue:
      "bg-[#34CDFD] text-white w-[248px] uppercase text-[18px] font-bold h-[50px]",
    mixedBlue: "bg-gray-500 text-white",
    transparent: "bg-green-500 text-white",
    gray: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  const colorClass = colorClasses[variant];

  return (
    <div>
      <Button radius="none" className={colorClass}>
        {text}
        <div className="absolute right-5 ">
          {withIcon && <img src="./arrow-right.svg" alt="" />}
        </div>
      </Button>
    </div>
  );
}
