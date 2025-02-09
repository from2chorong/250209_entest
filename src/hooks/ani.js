import { useEffect } from 'react';

const Ani = () => {
  useEffect(() => {
    document.addEventListener('scroll', () => {
			const scrollTop = window.scrollY;
			const windowHeight = window.innerHeight;
			
			document.querySelectorAll('.ani').forEach((el) => {
				const aniTop = el.getBoundingClientRect().top + scrollTop;
				const aniBottom = aniTop + el.offsetHeight;
				const aniDelay = el.getAttribute('data-delay');
		
				if (aniBottom > scrollTop && aniTop < scrollTop + windowHeight) {
					el.classList.add('on');
				}
		
				if (aniDelay) {
					el.style.transitionDelay = aniDelay;
				}
			});
		});
		
  }, []);
};

export default Ani;
