function app()
{

	this.location	= 0;

	this.tvCount = 0;
	this.inTv = false;
	this.videoCount = 0;
	this.inVideo = false;
	this.filmCount = 0;
	this.inFilm = false;
	
	this.moveLeft = function () {
	
		if (this.inTv) {	// You're already in TV section
							
			if ($TV[this.tvCount + 1]) {	// If there is an entry there
					this.tvCount++;
					moveScreen(0, this.tvCount);
				}
			} 
			else if (this.inFilm) {	// You're in Film

				
				if ($FILM[this.filmCount - 1]) {
					this.filmCount--;
					moveScreen(2, this.filmCount); // Move one back in film
				}
				else {
					// should move to homescreen, but for now....
					this.inFilm = false;
					this.filmCount = 0;
					$("body").removeClass("film");
					goHome();
				}
			}
			else {	// Start TV fresh
				if (!this.inVideo) {
					this.inFilm = false;
					this.inVideo = false;
					this.inTv = true;
					this.tvCount = 0;
					goToTv();
					}
			}
	};
	
	this.moveRight = function() {
		if (this.inFilm) {	// You're already in film section
						
			if ($FILM[this.filmCount + 1]) {
				this.filmCount++;
				moveScreen(2, this.filmCount);
			
			}
		} 
		else if (this.inTv) { // You're in TV section

				if ($TV[this.tvCount - 1]) {
					this.tvCount--;
					moveScreen(0, this.tvCount);
				}
			else {
				// should move to homescreen ,but for now...
				this.inTv = false;
				this.tvCount = 0;
				$("body").removeClass("tv");
				goHome();
			}
		}
		else {	// Start Film Fresh
	
			if (!this.inVideo) {
				this.inTv = false;
				this.inVideo = false;
				this.inFilm = true;
				this.filmCount = 0;
				goToFilm();
			}
		}
	
	};
	
	
	this.moveDown = function() {
		if (this.inVideo) {	// You're already in Videography section
							
			if ($VIDEO[this.videoCount + 1]) {	// If there is an entry there
				this.videoCount++;
				moveScreen(1, this.videoCount);
			}
		} 
		
		else if (!this.inFilm && !this.inTv) {	// Start Videography fresh
			this.inFilm = false;
			this.inTV = false;
			this.inVideo = true;
			this.videoCount = 0;
			goToVideo();
		}
	};
	
	
	this.moveUp = function() {
	
		if (this.inVideo) {	// You're already in Videography section
							
			if ($VIDEO[this.videoCount - 1]) {	// If there is an entry there
				this.videoCount--;
				moveScreen(1, this.videoCount);
			}
			else {
				// should move to homescreen ,but for now...

					this.inVideo = false;
					this.videoCount = 0;
					$("body").removeClass("video");
					goHome();
			}
		} 
	};
	
	this.forward = function() {
		
		if (this.inTv) {
			this.moveLeft();
		} else if (this.inVideo) {
			this.moveDown();
		} else { /* this.inFilm */
			this.moveRight();
		}
	
	};
	
	this.backwards = function() {
		
		if (this.inTv) {
			this.moveRight();
		} else if (this.inVideo) {
			this.moveUp();
		} else { /* this.inFilm */
			this.moveLeft();
		}
	
	};
	
}




