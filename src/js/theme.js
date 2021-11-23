import { docReady } from './utils';
import swiperInit from './swiper';
import countupInit from './countup';
// import navbarInit from './navbar';
import detectorInit from './detector';
import carouselInit from './carousel';


/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(countupInit);
// docReady(navbarInit);
docReady(swiperInit);
docReady(carouselInit);
