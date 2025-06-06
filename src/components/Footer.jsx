import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";

export default function Footer() {

   return (
<div className="bg-main-blue">
    <div className="container pt-20 pb-7.5 mx-auto px-4">

      
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
</div>
)
}
