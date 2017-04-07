import MagicalMenu from './modules/MobileMenu';
import revealOnScrollPlease from './modules/revealOnScroll';
import $ from 'jquery';

var magicalMenu = new MagicalMenu();
new revealOnScrollPlease($('.feature-item'), '65%'); 
new revealOnScrollPlease($('.testimonial'), '70%');

