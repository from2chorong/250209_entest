import { useEffect } from 'react';

const Settings = () => {
	useEffect(() => {
		
    // orientation change
		function updateOrientation() {
			const orientationValue = window.orientation;
			if (orientationValue === 90 || orientationValue === -90) {
				document.querySelector('meta[name=viewport]').setAttribute(
					'content',
					'width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes,target-densitydpi=medium-dpi'
				);
			}
		}
		
		window.onload = function () {
			document.body.onorientationchange = updateOrientation;
		};
		
		// Viewport
		function setViewPort(w_width) {
			if (w_width <= 480) {
				document.querySelector('meta[name=viewport]').setAttribute(
					'content',
					'width=480, maximum-scale=2.0, user-scalable=yes, target-densitydpi=medium-dpi'
				);
			} else {
				document.querySelector('meta[name=viewport]').setAttribute(
					'content',
					'width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes,target-densitydpi=medium-dpi'
				);
			}
		}
		
    let windowWidth = window.screen.width;
    setViewPort(windowWidth);

    window.addEventListener('resize', function () {
      windowWidth = window.screen.width;
      setViewPort(windowWidth);
    }, true);

    // vh
    const updateVH = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    updateVH();
    window.addEventListener('resize', updateVH);

    return () => {
      window.removeEventListener('resize', updateVH);
      document.body.onorientationchange = null;
    };
  }, []);
};

export default Settings;
