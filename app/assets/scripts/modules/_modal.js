import $ from "jquery";

class Modal{
	constructor(){
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		// this.events();
	}

	events(){
		// // clicking the open modal button 
		// this.openModal.click(this.openModal);	
		// // clicking the close modal button 
		// this.closeModal.click(this.closeModal);	

		// // clicking the escape modal key 

	}
	openModal(){
		// this.modal.addClass('modal__is-visible')
	}

	closeModal(){
		// this.modal.removeClass('modal__is-visible')
	}

}

export default Modal;