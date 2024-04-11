import { Button, Container, IconButton } from '@mui/material';
import { ASSETS } from '../assets/assets';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useRef } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

export default function MomentPage() {
  const swiperRef: any = useRef();
  return (
    <div className="py-14  backdrop-blur-[2px]">
      <h1 data-aos-delay="0" data-aos-duration="1000" data-aos="fade-up" className="text-6xl  text-center mb-6 tangerine-regular">
        Our Moment
      </h1>
      <Container>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            200: {
              slidesPerView: 1.3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {ASSETS.MOMENT.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos={i % 2 === 0 ? 'fade-down' : 'fade-up'}
                className={`aspect-square rounded-md border-2 shadow-lg shadow-slate-500/30 border-white `}
                alt={i === 0 ? 'shintya and yoris wedding' : item}
                src={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="grid grid-cols-2 gap-4 mt-6 opacity-20">
          <Button
            size="small"
            color="inherit"
            variant="outlined"
            onClick={() => {
              swiperRef?.current?.slidePrev();
            }}
          >
            <ArrowBack fontSize={'large'} color={'inherit'} />
          </Button>
          <Button
            color="inherit"
            size="small"
            variant="outlined"
            onClick={() => {
              swiperRef?.current?.slideNext();
            }}
          >
            <ArrowForward fontSize={'large'} color={'inherit'} />
          </Button>
        </div>
      </Container>

      {/* <div className="flex items-center gap-3 overflow-x-auto py-10">
        {ASSETS.MOMENT.map((item, i) => (
          <img
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos={i % 2 === 0 ? 'fade-down' : 'fade-up'}
            className={`lg:h-[400px] h-[230px] rounded-md border-2 shadow-lg shadow-slate-500/30 border-white ${i % 2 === 0 ? 'mb-24' : 'mt-5'}`}
            alt={i === 0 ? 'shintya and yoris wedding' : item}
            src={item}
            key={i}
          />
        ))}
      </div> */}
    </div>
  );
}
