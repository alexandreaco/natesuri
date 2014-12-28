// Change the contents of the screen depending on what part of the site you're in
// and how far into the array you are.

function moveScreen($category, $depth) {

	var $project;

	switch($category) {
		
		case 0:								// Television
			
			if ($TV[$depth]) {
				$project = new Project($TV[$depth]['title'], $TV[$depth]['type'], $TV[$depth]['embed'], $TV[$depth]['description'], $TV[$depth]['roles']);
			} 
			
			break;
			
		case 1:								// Video
		
			if ($VIDEO[$depth]) {
				$project = new Project($VIDEO[$depth]['title'], $VIDEO[$depth]['type'], $VIDEO[$depth]['embed'], $VIDEO[$depth]['description'], $VIDEO[$depth]['roles']);
			}
			
			break;
			
		case 2:								// Film
			
			if ($FILM[$depth]) {
				$project = new Project($FILM[$depth]['title'], $FILM[$depth]['type'], $FILM[$depth]['embed'], $FILM[$depth]['description'], $FILM[$depth]['roles']);
			}
			
			break;		
	}
	if ($project) {
		var $return = $project.prettyPrint();	
		$("#display").html($return);
		
	}

}

// Generate Homepage Content
	function goHome() {
		$("body").addClass("home");
	
		$("#left-bar").removeClass("active");
		$("#right-bar").removeClass("active");
		$("#down-bar").removeClass("active");
	
		$("#left-arrow").removeClass("left-film-arrow").addClass("active");
		$("#right-arrow").removeClass("right-tv-arrow").addClass("active");
		$("#down-arrow").removeClass("down-video-arrow").addClass("active");
	
		$("#down-arrow").removeClass("hide")
		$("#left-arrow").removeClass("hide")
		$("#right-arrow").removeClass("hide")
	
		$("#display").html( 
		"<div class='row'><div class='col-sm-2'></div><div class='col-sm-8 logo'><img src='img/natesuri.png' /><h3>Boston - New York - Los Angeles</h3></div><div class='col-sm-2'></div></div>" + 
		"<div class='row'></div>" + 
		"<div class='row'><div class='col-sm-2'></div><div class='col-sm-8'><h3>I'm a BU film student and I'm in love with my super attractive girlfriend. I also have a duck farm and play jazz piano. People think I'm the bee's knees and my smile lines are freaking adorable.</h3></div><div class='col-sm-2'></div></div>");
	}


// Print Left arrow into div 
function drawLeftArrow($div) {
	$html = $($div).html();
	$($div).html("<div id='left-arrow-outline'><span class='left'></span><span class='right'></span></div>" + $html);
}

// Print Right Arrow into div
function drawRightArrow($div) {
	$($div).html("<div id='right-arrow-outline'><span class='left'></span><span class='right'></span></div>" + $html);
}

