function Project($title, $type, $embed, $description, $roles)
{
	this.title = $title;
	this.type = $type;
	this.embed = $embed;
	this.description = $description;
	this.roles = $roles;
	this.rolesTxt = "";

	
	
	this.listRoles = function(){
		
		this.roles.forEach(function($role) {
			this.rolesTxt = this.rolesTxt + $role;
		});

	};
	
	this.prettyPrint = function(){
	
		this.listRoles;
		
		var r = "<div id='project'>	<div class='row'><div class='col-lg-1'></div><h2 class='col-lg-10'>" 
		+ this.title + 
		"</h2><div class='col-lg-1'></div></div><div class='row'><div class='col-lg-1'></div> <div class='embed embed-responsive embed-responsive-16by9 col-lg-10'>" 
		+ this.embed + 
		"</div><div class='col-lg-1'></div></div><div class='row'><div class='col-lg-1'></div><h3 class='description col-lg-10'>"
		+ this.description + 
		"</h3><div class='col-lg-1'></div></div><div class='row'><div class='col-lg-1'></div><div class='roles col-lg-10'>" 
		+ this.roles + 
		"<div class='col-lg-1'></div></div></div> </div>";
		
		$(".embed iframe").addClass("embed-responsive-item");
		return r;
	};
}

// video

// small description

// job   string[]