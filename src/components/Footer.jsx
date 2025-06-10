import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import { COLUMN_1, COLUMN_2 } from "../data/dataColumn";
import Column from "./Column.jsx";
import ellipse from "../assets/ellipse.png";

export default function Footer() {

   return (

  <div className="relative bg-main-blue overflow-hidden"> 
       <div className="absolute -top-30 -right-40 size-100 border border-blue3 rounded-full"
        style={{
         backgroundImage: `linear-gradient(to bottom, rgba(0, 142, 204, 0.8), rgba(0, 142, 204, 0.8)), url(${ellipse})`,
         backgroundSize: '371px',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
       }} />
  <div className="container pt-20 pb-7.5 mx-auto px-4">

    <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between lg:pr-10 xl:pr-47">  
      <div>
        <a href="index.html">
           <svg className="w-54 h-11 fill-white mb-8.5">
             <use href="./sprite.svg#icon-MegaMart"></use>
           </svg>
        </a>
        <p className="font-bold text-xl leading-none text-white mb-5">Contact Us</p>
        <div className="flex gap-3 w-41 h-10.5 mb-5 cursor-pointer">
          <svg className="size-6 fill-white">
            <use href="./sprite.svg#icon-whats-app"></use>
          </svg>
          <p className="whitespace-pre-line font-medium leading-[1.25] text-white">{"Whats App\n+1 202-918-2132"}</p>
        </div>

        <div className="flex gap-3 w-41 h-10.5 mb-7.5 cursor-pointer">
          <svg className="size-6 stroke-white1 fill-transparent">
             <use href="./sprite.svg#icon-call"></use>
          </svg>
          <p className="font-medium leading-[1.25] text-white">Call Us <br />+1 202-918-2132</p>
        </div>

        <p className="font-bold text-xl leading-none text-white mb-5">Download App</p>
        <div className="flex flex-wrap gap-5 mb-21">
          <a href="https://www.apple.com/app-store/">
            <img className="w-41.5 h-14" src={appStore} alt="App Store" />
          </a> 
          <a href="https://play.google.com/store/games?pli=1">
            <img className="w-47.5 h-14" src={googlePlay} alt="Google Play" />
          </a>
        </div>
      </div>

      <div className="flex lg:gap-10 xl:gap-20 z-10">
        <Column name="Most Popular Categories" options={COLUMN_1} />
        <Column name="Customer Services" options={COLUMN_2} />
      </div>
    </div>
    <p className="text-center text-xl leading-none text-white border-t border-blue3 pt-5">© 2022 All rights reserved. Reliance Retail Ltd.</p>
  </div>
</div>
)
}
