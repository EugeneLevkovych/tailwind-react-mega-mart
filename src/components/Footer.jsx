import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import { COLUMN_1, COLUMN_2 } from "../data/dataColumn";
import Column from "./Column.jsx";

export default function Footer() {

   return (
<div className="bg-main-blue">
    <div className="container flex justify-between pt-20 mx-auto px-4">

      <div>
        <svg className="w-54 h-11 fill-white mb-8.5">
          <use href="./sprite.svg#icon-MegaMart"></use>
        </svg>
        <p className="font-bold text-xl leading-none text-white mb-5">Coctact Us</p>
        <div className="flex gap-3 w-41 h-10.5 mb-5">
          <svg className="size-6 fill-white">
            <use href="./sprite.svg#icon-whats-app"></use>
          </svg>
          <p className="whitespace-pre-line font-medium leading-[1.25] text-white">{"Whats App\n+1 202-918-2132"}</p>
        </div>

        <div className="flex gap-3 w-41 h-10.5 mb-7.5">
          <svg className="size-6 stroke-white1 fill-transparent">
             <use href="./sprite.svg#icon-call"></use>
          </svg>
          <p className="font-medium leading-[1.25] text-white">Call Us <br />+1 202-918-2132</p>
        </div>

        <p className="font-bold text-xl leading-none text-white mb-5">Download App</p>
        <div className="flex gap-5 mb-21">
          <a href="https://www.apple.com/app-store/">
            <img className="w-41.5 h-14" src={appStore} alt="Google Play" />
          </a> 
          <a href="https://play.google.com/store/games?pli=1">
            <img className="w-47.5 h-14" src={googlePlay} alt="Google Play" />
          </a>
        </div>
      </div>

      <div className="flex gap-20">
        <Column name="Most Popular Categories" options={COLUMN_1} />
        <Column name="Customer Services" options={COLUMN_2} />
      </div>

    </div>
</div>
)
}
