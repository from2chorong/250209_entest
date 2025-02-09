import React from 'react';
import '../../styles/components/main.scss';

const Card = () => {
  return (
    <section className="card lg:py-[160px] py-[80px]">
			<div className="grid justify-between">
				<div className="item ani opacity up">
					<figure className="aspect-[1/0.5585] overflow-hidden"><img src="/img/img2-1.jpg" alt="잎 이미지" /></figure>
					<div className="text p-[30px]">
						<dl className="flex flex-col gap-y-[15px] text-customBlack text-[31px] md:mb-[85px] mb-[40px]">
							<dt className="text-customBlack font-extrabold leading-1.25">
								Lorem ipsum <br />
								dolor sit amet,
							</dt>
							<dd className="text-customGray text-[0.580645em] leading-1.5">
								Lorem ipsum dolor sit amet, <br />
								consectetur adipiscing elit,
							</dd>
						</dl>
						<span className="text-[#bdbdbd] text-[16px]">Lorem ipsum dolor sit amet,</span>
					</div>
				</div>
				<div className="item ani opacity up">
					<figure className="aspect-[1/0.5585] overflow-hidden"><img src="/img/img2-2.jpg" alt="꽃 이미지" /></figure>
					<div className="text p-[30px]">
						<dl className="flex flex-col gap-y-[15px] text-customBlack text-[31px] md:mb-[85px] mb-[40px]">
							<dt className="text-customBlack font-extrabold leading-1.25">
								Lorem ipsum <br />
								dolor sit amet,
							</dt>
							<dd className="text-customGray text-[0.580645em] leading-1.5">
								Lorem ipsum dolor sit amet, <br />
								consectetur adipiscing elit,
							</dd>
						</dl>
						<span className="text-[#bdbdbd] text-[16px]">Lorem ipsum dolor sit amet,</span>
					</div>
				</div>
				<div className="item ani opacity up">
					<figure className="aspect-[1/0.5585] overflow-hidden"><img src="/img/img2-3.jpg" alt="숲 이미지" /></figure>
					<div className="text p-[30px]">
						<dl className="flex flex-col gap-y-[15px] text-customBlack text-[31px] md:mb-[85px] mb-[40px]">
							<dt className="text-customBlack font-extrabold leading-1.25">
								Lorem ipsum <br />
								dolor sit amet,
							</dt>
							<dd className="text-customGray text-[0.580645em] leading-1.5">
								Lorem ipsum dolor sit amet, <br />
								consectetur adipiscing elit,
							</dd>
						</dl>
						<span className="text-[#bdbdbd] text-[16px]">Lorem ipsum dolor sit amet,</span>
					</div>
				</div>
				<div className="item ani opacity up">
					<figure className="aspect-[1/0.5585] overflow-hidden"><img src="/img/img2-4.jpg" alt="바다 이미지" /></figure>
					<div className="text p-[30px]">
						<dl className="flex flex-col gap-y-[15px] text-customBlack text-[31px] md:mb-[85px] mb-[40px]">
							<dt className="text-customBlack font-extrabold leading-1.25">
								Lorem ipsum <br />
								dolor sit amet,
							</dt>
							<dd className="text-customGray text-[0.580645em] leading-1.5">
								Lorem ipsum dolor sit amet, <br />
								consectetur adipiscing elit,
							</dd>
						</dl>
						<span className="text-[#bdbdbd] text-[16px]">Lorem ipsum dolor sit amet,</span>
					</div>
				</div>
			</div>
    </section>
  );
};

export default Card;
