export default function Footer() {
   return (
<div className="bg-main-blue">
    <div className="container pt-20 pb-7.5 mx-auto px-4">
        <svg className="w-54 h-11 fill-white1">
          <use href="./sprite.svg#icon-MegaMart"></use>
        </svg>
        <p className="font-bold text-xl leading-none text-white1">Coctact Us</p>
        <div className="flex">
            <svg className="w-54 h-11 fill-white1">
          <use href="./sprite.svg#icon-whats-app"></use>
        </svg>
          <div>
            <p>Whats App</p>
            <p>+1 202-918-2132</p>
          </div>
        </div>
        <div className="flex">
            <svg className="w-54 h-11 stroke-white1 fill-transparent">
          <use href="./sprite.svg#icon-call"></use>
        </svg>
          <div>
            <p>Call Us</p>
            <p>+1 202-918-2132</p>
          </div>
        </div>
    </div>
</div>
)
}
