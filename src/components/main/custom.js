import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/components/main.scss';

import { Pagination } from 'swiper/modules';

const Custom = () => {
	const paginationRef = useRef(null);

	return (
		<section className="custom lg:py-[160px] py-[80px]">
			<div className="content flex h-full justify-between">
				<div className="texts flex flex-col justify-center">
					<dl className="flex flex-col gap-y-[15px] text-customBlack lg:mb-[60px] mb-0 ani opacity right">
						<dt className="text-customBlack font-extrabold leading-1.25">
							Lorem ipsum <br />
							dolor sit amet,
						</dt>
						<dd className="text-customGray leading-1.5">
							Lorem ipsum dolor sit amet, <br />
							consectetur adipiscing elit,
						</dd>
					</dl>
					<div ref={paginationRef} className="custom-pagination flex lg:justify-start justify-center ani opacity right"></div>
				</div>
				<div className="imgs w-[100vw] h-full flex justify-end m-0">
					<div className="h-full ani opacity left">
						<Swiper
							loop={true}
							spaceBetween={20}
							slidesPerView={2}
							modules={[Pagination]}
							pagination={{
								el: paginationRef.current,
								clickable: true,
							}}
							onSwiper={(swiper) => {
								if (paginationRef.current) {
									swiper.params.pagination.el = paginationRef.current;
									swiper.pagination.init();
									swiper.pagination.render();
									swiper.pagination.update();
								}
							}}
							className="aspect-[1/0.6]"
						>
							<SwiperSlide>
								<figure className="w-full h-full overflow-hidden"><img src="/img/img2-1.jpg" alt="잎 이미지" /></figure>
							</SwiperSlide>
							<SwiperSlide>
								<figure className="w-full h-full overflow-hidden"><img src="/img/img2-2.jpg" alt="꽃 이미지" /></figure>
							</SwiperSlide>
							<SwiperSlide>
								<figure className="w-full h-full overflow-hidden"><img src="/img/img2-3.jpg" alt="숲 이미지" /></figure>
							</SwiperSlide>
							<SwiperSlide>
								<figure className="w-full h-full overflow-hidden"><img src="/img/img2-4.jpg" alt="바다 이미지" /></figure>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
    </section>
  );
};

export default Custom;