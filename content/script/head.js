class headertemplate extends HTMLElement{
	connectCallback(){
		this.innerHTML = '
			
	<div id="shadenav" class ="fadeout shadenav" onclick="closeNav()"></div>
		<div id="sidenav" class="sidenav">
			<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
			<a href="http://url" target="_blank" data-label="Home" class="iconedit headertext" >
				<ion-icon name="home-outline"></ion-icon> Home
			</a><br>
			<a href="http://url" target="_blank" data-label="Store" class="iconedit headertext" >
				<ion-icon name="cart-outline"></ion-icon> Store
			</a><br>
			<a href="http://url" target="_blank" data-label="Forum" class="iconedit headertext" >
				<ion-icon name="chatbox-outline"></ion-icon> Forum
			</a><br>
			<a href="http://url" target="_blank" data-label="Links" class="iconedit headertext" >
				<ion-icon name="link-outline"></ion-icon> Links
			</a><br>
			<a href="http://url" target="_blank" data-label="Contact" class="iconedit headertext" >
				<ion-icon name="call-outline"></ion-icon> Contact
			</a><br>
			<a href="http://url" target="_blank" data-label="Search" class="iconedit headertext" >
				<ion-icon name="search-outline"></ion-icon>
			</a><input class="sidenavbar" type="text" id="myText" size="16"><br>

			
		</div>
	
	
	
	
		<div class="wrapper">
			<header id="header" class="fullheader">
				<div class="header-wrapper">
					<div id="topheader" class="tophead medium-hide colorgrad">
						<div class="flex-row centercontent">
						
							<div class="flex-col flex-left headertext ">
									<div class="icons" >
										
										<a href="http://url" target="_blank" class="iconedit">
											<ion-icon name="logo-facebook"></ion-icon>
										</a>
										<a href="http://url" target="_blank" class="iconedit">
											<ion-icon name="logo-instagram"></ion-icon>
										</a>
										<a href="http://url" target="_blank" class="iconedit">
											<ion-icon name="logo-twitter"></ion-icon>
										</a>
										<a href="http://url" target="_blank" class="iconedit">
											<ion-icon name="mail-outline"></ion-icon>
										</a>
									</div>
								</div>
							
							
							<div class="flex-col flex-center">
							 
							</div>
							
							
							<div class="flex-col flex-right tophead-right headertext">
								<div class="makeline">Get his ass for 50% off</div>
								<div class="makeline">|</div>
								<div class="makeline">Open 24/7, bug these dudes any time</div>
								<div class="makeline"> | </div>
								<div class="makeline"><ion-icon name="call-outline"></ion-icon> (555)-555-5555</div>
							
							</div>
						
						</div>					
					</div>
						
					<div id="botheader" class="header flex-row bothead medium-hide">
						<div class = "centercontent flex-row">
							<div class= "smallbanner flex-left"> 
								<a href="main.html">
									<img class = "banner testingborder" src= "img/banner.png">
								</a>
							</div>
							
							
							<div id="botheader-rightcontainer" class= "flex-right">
								<div id="bothead-rightcontainer-container" style="padding-right 10px;">
									<div class = "makeline">
										<a href="http://url" target="_blank" data-label="Home" class="iconedit headertext" >
											<ion-icon name="home-outline"></ion-icon> Home
										</a>
									</div>
									<div class = "makeline">
										<a href="http://url" target="_blank" data-label="Store" class="iconedit headertext" >
											<ion-icon name="cart-outline"></ion-icon> Store
										</a>
									</div>
									<div class = "makeline">
										<a href="http://url" target="_blank" data-label="Forum" class="iconedit headertext" >
											<ion-icon name="chatbox-outline"></ion-icon> Forum
										</a>
									</div>
									<div class = "makeline">
										<a href="http://url" target="_blank" data-label="Links" class="iconedit headertext" >
											<ion-icon name="link-outline"></ion-icon> Links
										</a>
									</div>
									<div class = "makeline">
										<a href="http://url" target="_blank" data-label="Contact" class="iconedit headertext" >
											<ion-icon name="call-outline"></ion-icon> Contact
										</a>
									</div>
									<div class="headertext makeline">|</div>
									<div class = "makeline">
										<a href="http://url" target="_blank" data-label="Search" class="iconedit headertext" >
											<ion-icon name="search-outline"></ion-icon>
										</a>
									</div>
									
							
							
								</div>
							</div>
						</div>
					</div>
					
					<div id="smallheader" class="bothead medium-show sticky">
						<div class= "smallbanner"> 
							<a href="main.html">
								<img class = "banner testingborder" src= "img/banner.png">
							</a>
						</div>
						<div class="sidenav-bar">   
							<span class= "fadein" id="sidenavbutton" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span> 
						</div>
					</div>
					
				
				</div>
			</header>
	
	
	
	
	
	
	
	
		';
	}
}

customElements.define('header-template', headertemplate)