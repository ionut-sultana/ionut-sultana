import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class revealOnScroll{
	constructor(elems, offset) {
		this.itemsToReveal = elems;
		this.offsetPerc = offset; 
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}

 
	createWaypoints(){
		var that = this;
		this.itemsToReveal.each(function(i,v) {
			var v = this;
			new Waypoint({
				element:v,
				handler:function(){
					$(v).addClass('reveal-item--is-visible')
				},
				offset:that.offsetPerc
			})
		})
	}
}

export default revealOnScroll;