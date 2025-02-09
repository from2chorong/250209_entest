import React from 'react';
import logo from '../../logo.svg';
import '../../styles/components/layout.scss';

const Header = () => {
  return (
		<header className="w-full h-[50px] bg-white px-[6.25%] max-1480:px-5">
			<div className="w-full h-full flex items-center justify-between">
				<h1>
					<a href="/">
						<img src={logo} alt="EN logo" className="w-[136px] h-[36px]" />
					</a>
				</h1>

				<nav>
					<ul className="flex md:gap-x-[40px] gap-x-[30px]">
						<li><a href="#;" className="text-customBlack md:text-[20px] text-[17px]">HOME</a></li>
						<li><a href="#;" className="text-customBlack md:text-[20px] text-[17px]">ABOUT</a></li>
						<li><a href="#;" className="text-customBlack md:text-[20px] text-[17px]">CONTACT</a></li>
					</ul>
				</nav>
			</div>
    </header>
  );
};

export default Header;
