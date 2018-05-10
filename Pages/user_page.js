toogleMenu = function(){
	var navlist = document.getElementById("nav-menu");
	
	// Get all buttons with class="btn" inside the container
			var li = navlist.getElementsByTagName("li");
	// Loop through the buttons and add the active class to the current/clicked button
			for (var i = 0; i < li.length; i++) {
			  li[i].addEventListener("click", function() {
				var current = document.getElementsByClassName("active");
				current[0].className = current[0].className.replace("active", "");
				this.className += " active";
			  });}	  

}

window.onload = function(){
    toogleMenu();
    toogleDiv();
}

toogleDiv = function(){
    hd = document.getElementsByClassName("hide");
    hd[0].style.display = "none"
    sect = document.getElementsByTagName("section");
    div = document.getElementsByClassName("toogle");
    var navlist = document.getElementById("nav-menu");
	
	// Get all buttons with class="btn" inside the container
    var li = navlist.getElementsByTagName("li");
    for(i=0;i<li.length;i++){
        li[i].addEventListener("click", function(){
            for(j=0;j<div.length;j++){
                if(div[j].style.display === "none"){
                    div[j].style.display = "block"
                }else{
                    div[j].style.display = "none";
                }
            }
        })
    }
}

