document.write('<header>' +
	'<div id="header-logo">' +
		'<a href="index.html">The Reader\'s Nook</a>' +
	'</div>' +
    '<div class="menuicon">'+
        '<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="toggleMenu()">&#9776;</a>' +
    '</div>' +
	'<div class="topnav" id="myTopnav">' +
			'<a href="index.html">Home</a>' +
            '<div class="dropdown">' +
            	'<a href="about.html" class="dropbtn">About</a>' +
            	'<div class="dropdown-content">' +
    				'<a href="mission.html">Mission</a>' +
    				'<a href="team.html">Our Team</a>' +
    			'</div>' +
            '</div>' +
            '<a href="bookcategories.html">Books</a>' +
            '<div class="dropdown">' +
                '<a href="getinvolved.html" class="dropbtn">Get Involved</a>' +
                '<div class="dropdown-content">' +
                    '<a href="network.html">Our Network</a>' +
                    '<a href="volunteer.html">Volunteer</a>' +
                    '<a href="donate.html">Donate</a>' +
                '</div>' +
            '</div>' +
            '<a href="news.html">In The News</a>' +
            '<a href="contact.html">Contact</a>' +
	'</div>' +
'</header>');

function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}