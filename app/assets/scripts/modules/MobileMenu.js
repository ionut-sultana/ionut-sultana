import $ from 'jquery';

class MobileMenu{
	constructor(){
		this.siteHeader = $('.site-header');
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.events();
	}

	events(){
		this.menuIcon.click(
				this.toggleTheMenu.bind(this)
		);
		console.log(this);
		//prima data cand se incarca 'this' refers to the Class MobileMenu()
		//bind replaces the 'this' keyword with a : string, object...
	}

	toggleTheMenu(){
		console.log(this)
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
		this.siteHeader.toggleClass('site-header--is-expanded');
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
	}
}


export default MobileMenu;