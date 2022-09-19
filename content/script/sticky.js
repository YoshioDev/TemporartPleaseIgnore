const smallhead = document.getElementById("smallheader");
const bothead = document.getElementById("botheader");
var reset = true;
var lastscroll = 0;
if (window.scrollY > 120){
	var reset = false;
}

window.addEventListener("scroll", function(){
	if (window.scrollY >= 120){
		if (window.scrollY < 360){
			if (reset == true){
				
				if (window.scrollY > lastscroll){
					bothead.style.transform = "translateY(-200px)";
				} else{
					bothead.style.transform = "translateY(0px)";
					bothead.style.transition = "all 0s";
				}		
			}
		}else {
			bothead.classList.add("sticky");
			bothead.style.transform = "translateY(0px)";
			bothead.style.transition = "all .5s ease";
			reset = false;
		}
	}
	else { 
		if(window.scrollY < 30){
			bothead.classList.remove("sticky");
			reset = true;
		}
	}
	lastscroll = window.scrollY;
});
