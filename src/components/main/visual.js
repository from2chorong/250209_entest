import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../../styles/components/main.scss';

import { EffectFade, Navigation } from 'swiper/modules';

const Visual = () => {
  return (
    <section className="visual">
			<Swiper
				loop={true}
        effect={'fade'}
				spaceBetween={0}
				slidesPerView={1}
				navigation={{
					prevEl: ".swiper-button-prev",
					nextEl: ".swiper-button-next",
				}}
				modules={[EffectFade, Navigation]}
      >
				<SwiperSlide>
					<figure className="w-full h-full"></figure>
					<div className="inner1440 h-full flex flex-col justify-center">
						<div className="text w-full h-full flex flex-col justify-center text-white">
							<h2 className="font-extrabold leading-1.25">
								Lorem ipsum <br />
								dolor sit amet,
							</h2>
							<p className="leading-1.5">
								Lorem ipsum dolor sit amet, consectetur <br />
								sed do eiusmod tempor incididunt ut <br />
								labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<figure className="w-full h-full"></figure>
					<div className="inner1440 h-full flex flex-col justify-center">
						<div className="text w-full h-full flex flex-col justify-center text-white">
							<h2 className="font-extrabold leading-1.25">
								Lorem ipsum <br />
								dolor sit amet,
							</h2>
							<p className="leading-1.5">
								Lorem ipsum dolor sit amet, consectetur <br />
								sed do eiusmod tempor incididunt ut <br />
								labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<div className="buttons flex">
					<button className="swiper-button-prev cursor-pointer">
						<img src="/icon/angle_left.png" alt="왼쪽 화살표" />
					</button>
					<button className="swiper-button-next cursor-pointer">
						<img src="/icon/angle_right.png" alt="오른쪽 화살표" />
					</button>
				</div>
      </Swiper>
    </section>
  );
};

export default Visual;
