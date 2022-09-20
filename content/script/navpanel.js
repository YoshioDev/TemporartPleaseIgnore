	document.getElementById("shadenav").classList.toggle("fadeout");
	document.getElementById("sidenavbutton").classList.toggle("fadein");

function openNav() {
	document.getElementById("sidenav").style.transform = "translateX(0%)";
	document.getElementById("shadenav").classList.toggle("fadeout");
	document.getElementById("shadenav").classList.toggle("fadein");
	document.getElementById("sidenavbutton").classList.toggle("fadein");
	document.getElementById("sidenavbutton").classList.toggle("fadeout");
}

function closeNav() {
	document.getElementById("sidenav").style.transform = "translateX(100%)";
	document.getElementById("shadenav").classList.toggle("fadein");
	document.getElementById("shadenav").classList.toggle("fadeout");	
	document.getElementById("sidenavbutton").classList.toggle("fadein");
	document.getElementById("sidenavbutton").classList.toggle("fadeout");
}