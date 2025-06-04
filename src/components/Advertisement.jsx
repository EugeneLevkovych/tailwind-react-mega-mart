export default function Advertisement() {

  return (
    <div className="container flex justify-between bg-blue2 mx-auto px-4">
        <div className="lg:ml-10 xl:ml-[5.62rem] mt-10 space-y-5">
          <p className="font-semibold text-[1.2rem] lg:text-[1.9rem] leading-none text-white1">Best Deal Online on smart watches</p>
          <p className="font-bold text-[2rem] lg:text-[3.9rem] leading-none text-white1">SMART WEARABLE.</p>
          <p className="font-semibold text-[1.2rem] lg:text-[1.9rem] leading-none text-white1">UP to 80% OFF</p> 
        </div>
        <div className="w-[10rem] lg:w-[16.75rem] h-[10rem] lg:h-[16.88rem] my-5 lg:mr-5 xl:mr-[7.75rem]">
          <img  src="./src/assets/smart-wearable.png" alt="Watch" />
        </div>
    </div>
  )}