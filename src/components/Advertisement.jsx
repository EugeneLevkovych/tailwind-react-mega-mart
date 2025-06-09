import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Advertisement = ({ slides }) => {
    const paginationStyle = {
    '--swiper-pagination-color': 'var(--color-white)',
    '--swiper-pagination-bullet-inactive-color': 'var(--color-white)',
    '--swiper-pagination-bullet-size': '10px',
    '--swiper-pagination-bullet-horizontal-gap': '4px' 
  };



  return (
<div style={paginationStyle}>
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true,
      bulletClass: 'swiper-pagination-bullet',
       }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {slides.map((slide) => ( <SwiperSlide key={slide.id} >
        <div className="container relative flex justify-between border-0 rounded-2xl mx-auto px-4 overflow-hidden" style={{backgroundColor: `${slide.backColor}`}}>

                    <div className="absolute -top-75 -right-2 flex justify-center items-center size-116.5 border-2 rounded-full" style={{borderColor: `${slide.decorColor}`}}>
                        <div className="size-105.5 rounded-full" style={{backgroundColor: `${slide.decorColor}`}} />
                    </div>
                   
                    <div className="absolute -bottom-28 right-60 flex justify-center items-center size-46 border-2 rounded-full" style={{borderColor: `${slide.decorColor}`}}>
                        <div className="size-38.5 rounded-full" style={{backgroundColor: `${slide.decorColor}`}} />
                    </div>
                          
                    <div className="lg:ml-10 xl:ml-[5.62rem] mt-10 space-y-5 z-10" style={{color: `${slide.textColor}`}}>
                      <p className="font-semibold text-[1.2rem] lg:text-[1.9rem] leading-none">Best Deal Online on smart watches</p>
                      <p className="font-bold text-[2rem] lg:text-[3.9rem] leading-none">{slide.name}</p>
                      <p className="font-semibold text-[1.2rem] lg:text-[1.9rem] leading-none">{slide.discont}</p> 
                    </div>
                    <div className="w-[10rem] lg:w-[16.75rem] h-[10rem] lg:h-[16.88rem] my-5 lg:mr-5 xl:mr-[7.75rem] z-50">
                      <img src={slide.photoName} alt="Watch" />
                    </div>

        </div>
        </SwiperSlide>))}
    </Swiper>
</div>
  );
};