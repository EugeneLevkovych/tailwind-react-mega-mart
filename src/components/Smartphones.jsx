import SmartphonesCard from "./SmartphonesCard";

export default function Smartphones() {

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between mt-[7.5rem]">
        <p className="relative mb-4 font-bold text-2xl leading-[1.25] text-gray2 after:my-underline">Grab the best deal on <span className="text-main-blue">Smartphones</span></p>
        <div className="flex items-center gap-[6px]">
          <p className="font-medium leading-[1.12] text-gray4">View All</p>
          <svg className="size-[18px] stroke-main-blue fill-transparent">
            <use href="./sprite.svg#icon-arrow-right"></use>
          </svg>
        </div>
      </div>
      <div className="flex">
      <SmartphonesCard />
      </div>
    </div>
  )}