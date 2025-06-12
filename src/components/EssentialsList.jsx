import { ESSENTIALS } from '../data/dataEssentials';
import EssentialsCard from './EssentialsCard';

export default function EssentialsList() {
  return (
    <div className="container mx-auto px-4 mb-30">
      <div className="flex justify-between border-b-1 border-gray3 pb-4 mb-10">
        <p className="relative font-bold text-2xl leading-[1.25] text-gray2 after:my-underline">
          Daily{' '}
          <span className="text-main-blue cursor-pointer">Essentials</span>
        </p>
        <div className="flex items-center gap-[6px] cursor-pointer">
          <p className="font-medium leading-[1.12] text-gray4">View All</p>
          <svg className="size-[18px] stroke-main-blue fill-transparent">
            <use href="./sprite.svg#icon-arrow-right"></use>
          </svg>
        </div>
      </div>
      <ul className="flex flex-wrap justify-center items-center gap-[1.17rem]">
        {ESSENTIALS.map(item => (
          <EssentialsCard essentialsObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
