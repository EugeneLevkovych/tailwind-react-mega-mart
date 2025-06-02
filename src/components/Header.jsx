export default function Header() {

  return (
  <div className="bg-gray1">
    <div className="flex justify-between container py-3.5 mx-auto px-4">
        <p className="text-sm text-gray2">Welcome to worldwide Megamart!</p>
        <svg className="md:hidden size-[18px] stroke-main-blue fill-transparent">
          <use href="./sprite.svg#icon-burger1"></use>
        </svg>
        <div className="hidden md:flex text-gray2">
           <div className="flex gap-[6px] items-center">
            <svg className="size-[18px] stroke-main-blue fill-transparent">
              <use href="./sprite.svg#icon-location"></use>
            </svg> 
             <p className="relative after:my-bar pr-4">Deliver to <span className="font-semibold">423651</span></p>
           </div>
           <div className="flex gap-[6px] items-center pl-4">
            <svg className="size-[18px] stroke-main-blue fill-transparent">
              <use href="./sprite.svg#icon-delivery-truck"></use>
            </svg>
             <p className="relative after:my-bar pr-4">Track your order</p>
           </div>
           <div className="flex gap-[6px] items-center pl-4">
             <svg className="size-[18px] stroke-main-blue fill-transparent">
              <use href="./sprite.svg#icon-discount"></use>
             </svg>
             <p>All Offers</p>
           </div>
        </div>
    </div>
  </div>
  )}