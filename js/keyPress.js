$(document).ready(function() {

	goHome();
	
	var $App = new app();

	// Handle Click/Tap events to navigate through site
	
	// Click close X on popover
	$(".close").click(function(){
		$("#popover").removeClass("active");
		$("#popover").addClass("inactive");
		
		$(".background").removeClass("blur");
		$("#left-bar").removeClass("blur");
		$("#right-bar").removeClass("blur");
		$("#down-bar").removeClass("blur");
	});
	
	// Click info circle
	$(".info").click(function(){
		$("#popover").removeClass("inactive");
		$("#popover").addClass("active");
		
		$(".background").addClass("blur");
		$("#left-bar").addClass("blur");
		$("#right-bar").addClass("blur");
		$("#down-bar").addClass("blur");
	});
	
	// Open Contact Form
	$(".closed-arrow").click(function() {
		$(".closed-arrow").toggleClass("closed-arrow");
		$(".contact-form").toggleClass("hide");
	});
	
	
	

	// Handle keyboard events to navigate through site
	
	$(document).keydown(function(e) {

		switch(e.keyCode) {
		
			case 37: // left
				
				$App.moveLeft();

			break;		

			case 38: // up
			
				$App.moveUp();
				
			break;

			case 39: // right
			
				$App.moveRight();
				
			break;

			case 40: // down
			
				$App.moveDown();
			
			break;

			default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	
	});
	
	$("#tv-btn").click(function(){
		$App.moveLeft();
	});
	
	$("#left-bar").click(function(){
		$App.moveLeft();
	});
	
	
	
	$("#video-btn").click(function(){
		$App.moveDown();
	});
	
	$("#down-bar").click(function(){
		$App.moveDown();
	});
	
	$("#film-btn").click(function(){
		$App.moveRight();
	});
	
	$("#right-bar").click(function(){
		$App.moveRight();
	});
	
	$("#mobile-arrows .left").click(function() {
		$App.backwards();
	});
	
	$("#mobile-arrows .right").click(function() {
		$App.forward();
	});
	
	
	
});