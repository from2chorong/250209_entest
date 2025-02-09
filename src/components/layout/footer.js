import React from 'react';
import logo from '../../logo.svg';
import '../../styles/components/layout.scss';

const Footer = () => {
  return (
		<footer className="w-full sm:h-[350px] h-[280px] bg-customBlack">
			<div className="inner1440 h-full flex flex-col justify-center gap-y-[30px]">
				<a href="/">
					<img src={logo} alt="EN logo" className="w-[252px] h-[67px]" />
				</a>
				<p className="text-[#f5f5f5] text-[21px]">Copyrights 2024. <b>EN MEDIA</b> All Rights Reserved</p>
			</div>
    </footer>
  );
};

export default Footer;
