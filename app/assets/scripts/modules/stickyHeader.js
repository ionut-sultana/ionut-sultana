import $ from 'jquery';
import smoothscroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
	constructor(elem) {
		this.element = $(elem)
		console.log(this.element); 
		this.siteHeader = $('.site-header') ;   
		this.lazyImages = $('.lazyload');    
		this.pageSections = $('.page-section');
		this.headerLinks = $('.primary_nav a');
		this.refreshWaypoint();
		this.createHeaderWaypoiny();
		this.createPageSectionWaypoints();
	}


	addSmoothscroll(){
		this.headerLinks.smoothScroll();
	}

	refreshWaypoint(){
		this.lazyImages.load(function(){
			Waypoint.refreshAll();
		})
	}

	createHeaderWaypoiny(){
		var that = this;
		this.element.each(function(i,v){
			var v = that;
			new Waypoint({
				element:that.element[0],
				handler:
				function(direction){
		
					if(direction == 'down' ){
						that.siteHeader
						.addClass('site-header--dark')
					} else {
						that.siteHeader
						.removeClass('site-header--dark')
					}
				}
			}) 
		});
	}

	createPageSectionWaypoints(){
		this.pageSections.each(function(){
			var currentPageSection = this;

			new Waypoint({
				element:currentPageSection ,
				handler:function(direction){
					if(direction == "down"){
						var matchHeaderLink = currentPageSection.getAttribute('data-matching-link');
						 console.log(matchHeaderLink); 
						 $('.primary_nav a').removeClass('is-current-link');
						$(matchHeaderLink).addClass('is-current-link');
						
					}
				},
				offset:'20%'
			})

			new Waypoint({
				element:currentPageSection ,
				handler:function(direction){
					if(direction == 'up'){
						var matchHeaderLink = currentPageSection.getAttribute('data-matching-link');
						 console.log(matchHeaderLink); 
						 $('.primary_nav a').removeClass('is-current-link');
						$(matchHeaderLink).addClass('is-current-link');
						
					}
				},
				offset:'-20%'
			})
		});
	}



} 

export default StickyHeader;