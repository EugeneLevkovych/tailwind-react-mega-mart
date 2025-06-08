import watch1 from "../assets/smart-wearable.png";
import ellipse from "../assets/ellipse.png";

export default function Advertisement() {

  return (
    <div className="container relative flex justify-between border-0 rounded-2xl bg-blue2 mb-[7.5rem] mx-auto px-4 overflow-hidden">
         <div className="absolute -top-75 -right-2 size-116.5 border-2 rounded-full"
        style={{
         backgroundImage: `linear-gradient(to bottom, rgba(33, 40, 68, 0.9), rgba(33, 40, 68, 0.9)), url(${ellipse})`,
         backgroundSize: '426px',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         borderColor: 'var(--color-decor-blue)',
          }} />

             <div className="absolute -bottom-20 right-60 size-37 border-2 rounded-full"
        style={{
         backgroundImage: `linear-gradient(to bottom, rgba(33, 40, 68, 0.9), rgba(33, 40, 68, 0.9)), url(${ellipse})`,
         backgroundSize: '118px',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         borderColor: 'var(--color-decor-blue)',
          }} />
         

        <div className="lg:ml-10 xl:ml-[5.62rem] mt-10 space-y-5 z-10">
          <p className="font-semibold text-[1.2rem] lg:text-[1.9rem] leading-none text-white1">Best Deal Online on smart watches</p>
          <p className="font-bold text-[2rem] lg:text-[3.9rem] leading-none text-white1">SMART WEARABLE.</p>
          <p className="font-semibold text-[1.2rem] lg:text-[1.9rem] leading-none text-white1">UP to 80% OFF</p> 
        </div>
        <div className="w-[10rem] lg:w-[16.75rem] h-[10rem] lg:h-[16.88rem] my-5 lg:mr-5 xl:mr-[7.75rem] z-50">
          <img src={watch1} alt="Watch" />
        </div>
    </div>
  )}