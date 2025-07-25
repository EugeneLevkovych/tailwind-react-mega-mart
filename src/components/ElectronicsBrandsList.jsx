import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ELECTRONICS_BRANDS } from '../data/dataElectronicsBrands';
import ElectronicsBrandsCard from './ElectronicsBrandsCard';

export default function ElectronicsBrandsList() {
  const paginationStyle = {
    '--swiper-pagination-bullet-size': '10px',
    '--swiper-pagination-bullet-horizontal-gap': '4px',
  };

  return (
    <div className="container mx-auto px-4 mb-23">
      <div className="flex justify-between border-b-1 border-gray3 pb-4 mb-10">
        <p className="relative font-bold text-2xl leading-[1.25] text-gray2 after:my-underline">
          Top{' '}
          <span className="text-main-blue cursor-pointer">
            Electronics Brands
          </span>
        </p>
        <div className="flex items-center gap-[6px] cursor-pointer">
          <p className="font-medium leading-[1.12] text-gray4">View All</p>
          <svg className="size-[18px] stroke-main-blue fill-transparent">
            <use href="./sprite.svg#icon-arrow-right"></use>
          </svg>
        </div>
      </div>

      <div
        className="electronic-brands-pagination electronic-brands-width"
        style={paginationStyle}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={36}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {ELECTRONICS_BRANDS.map(item => (
            <SwiperSlide key={item.id}>
              <ElectronicsBrandsCard electronicsBrandsObj={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
