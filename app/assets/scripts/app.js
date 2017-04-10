import MagicalMenu from './modules/MobileMenu';
import revealOnScrollPlease from './modules/revealOnScroll';
import StickyHeader from './modules/stickyHeader';
import Modal from './modules/modal';
import $ from 'jquery'; 
 
var magicalMenu = new MagicalMenu();
var modal = new Modal();
new StickyHeader($('h1.large-hero__title '));
new revealOnScrollPlease($('.feature-item'), '65%'); 
new revealOnScrollPlease($('.testimonial'), '70%');

