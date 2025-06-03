export default function Hero() {

  return (
<div className="container flex items-center py-5 mx-auto px-4">
    <div className="flex justify-center items-center size-12 rounded-lg bg-blue1 mr-4">
      <svg className="w-[1.6rem] h-[1.1rem] stroke-main-blue fill-transparent">
        <use href="./sprite.svg#icon-burger1"></use>
      </svg>
    </div>
    <a href="./index.html">
      <svg className="w-[8.6rem] h-7 fill-main-blue">
        <use href="./sprite.svg#icon-MegaMart"></use>
      </svg>
    </a>
    <div className="relative max-w-[31.7rem] w-full ml-auto"> 
        <svg className="absolute size-[18px] bottom-4 left-4 stroke-main-blue fill-transparent">
         <use href="./sprite.svg#icon-search"></use>
        </svg>
      <input className="h-12 w-full bg-blue1 pl-11 text-sm leading-[1.1] text-gray2" type="text" placeholder="Search essentials, groceries and more..." />
        <svg className="absolute size-[18px] right-4 bottom-4 stroke-main-blue fill-main-blue">
         <use href="./sprite.svg#icon-burger2"></use>
        </svg>
    </div> 
    <div className="flex items-center gap-1.5 ml-[1.9rem]">
      <svg className="size-6 stroke-main-blue fill-transparent">
        <use href="./sprite.svg#icon-user"></use>
      </svg>
      <p className="font-bold leading-[1.5] text-gray2 relative after:my-bar pr-5">Sign Up/Sign In</p>
    </div> 
     <div className="flex items-center gap-1.5 ml-5">
      <svg className="size-6 stroke-main-blue fill-transparent">
        <use href="./sprite.svg#icon-buy"></use>
      </svg>
      <p className="font-bold leading-[1.1] text-gray2">Cart</p>
    </div>
</div>
)}