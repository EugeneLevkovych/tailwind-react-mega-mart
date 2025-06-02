export default function Hero() {

  return (
<div className="container flex items-center py-5 mx-auto px-4">
    <div className="flex justify-center items-center size-12 bg-blue1 mr-4">
      <svg className="w-[1.6rem] h-[1.1rem] stroke-main-blue fill-transparent">
        <use href="./sprite.svg#icon-burger1"></use>
      </svg>
    </div>
    <a href="./index.html">
      <svg className="w-[8.6rem] h-7 fill-main-blue">
        <use href="./sprite.svg#icon-MegaMart"></use>
      </svg>
    </a>   
</div>
)}