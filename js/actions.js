
var goToFilm = function() {
	moveScreen(2, 0);
	$("body").addClass("film");
	$("body").removeClass("home");
	$("body").removeClass("video");
	$("body").removeClass("tv");
	
	$("#right-bar").toggleClass("active");
	$("#left-arrow").removeClass("active");
	$("#down-arrow").toggleClass("hide");
	$("#left-arrow").addClass("left-film-arrow");
};

var goToVideo = function() {
	moveScreen(1,0);
	$("body").addClass("video");
	$("body").removeClass("home");
	$("body").removeClass("film");
	$("body").removeClass("tv");
	
	$("#left-arrow").toggleClass("hide");
	$("#right-arrow").toggleClass("hide");
	$("#down-bar").toggleClass("active");
	$("#up-arrow").removeClass("active");
	$("#up-arrow").addClass("up-back-arrow");
};

var goToTv = function() {
	moveScreen(0,0);
	$("body").addClass("tv");
	$("body").removeClass("home");
	$("body").removeClass("film");
	$("body").removeClass("video");
	
	$("#left-bar").toggleClass("active");
	$("#right-arrow").removeClass("active");
	$("#right-arrow").addClass("right-tv-arrow");
	$("#down-arrow").toggleClass("hide");
};

