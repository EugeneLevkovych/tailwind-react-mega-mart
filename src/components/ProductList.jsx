import { SMARTPHONES } from '../data/dataSmartphones';
import ProductCard from './ProductCard';

export default function SmartphonesList() {
  return (
    <div className="container mx-auto px-4 my-30">
      <div className="flex justify-between border-b-1 border-gray3 pb-4 mb-10">
        <p className="relative font-bold text-2xl leading-[1.25] text-gray2 after:my-underline">
          Grab the best deal on{' '}
          <span className="text-main-blue cursor-pointer">Smartphones</span>
        </p>
        <div className="flex items-center gap-[6px] cursor-pointer">
          <p className="font-medium leading-[1.12] text-gray4">View All</p>
          <svg className="size-[18px] stroke-main-blue fill-transparent">
            <use href="./sprite.svg#icon-arrow-right"></use>
          </svg>
        </div>
      </div>
      <ul className="flex flex-wrap justify-center items-center gap-4">
        {SMARTPHONES.map(item => (
          <ProductCard smartphoneObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
