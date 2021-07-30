// Toggle Left Menu Main
function toggleMenu() {
    var sideMenu = document.getElementById("collapse-menu");
    var sideMenuPanelMenu = document.getElementById("side-menu");
    var activeMenu = document.getElementById("active-menu");
    if (sideMenu.style.display === "none") {
        sideMenu.style.display = "block";
        sideMenuPanelMenu.style.width = "28rem";
    } else {
        sideMenu.style.display = "none";
    }
    if (activeMenu.style.display === "block") {
        activeMenu.style.display = "none";
    } else {
        activeMenu.style.display = "block";
        sideMenuPanelMenu.style.width = "10.2rem";
    }
  }

// Toggle Left Menu Main
function viewToggleMenu() {
    var sideMenu = document.getElementById("collapse-menu");
    var sideMenuPanelMenu = document.getElementById("side-menu");
    var activeMenu = document.getElementById("active-menu");
    if (sideMenu.style.display === "none") {
        sideMenu.style.display = "block";
        sideMenuPanelMenu.style.width = "28rem";
    } else {
        sideMenu.style.display = "none";
    }
    if (activeMenu.style.display === "block") {
        activeMenu.style.display = "none";
    } else {
        activeMenu.style.display = "block";
        sideMenuPanelMenu.style.width = "0";
    }
  }


// Toggle Search
function toggleSearch() {
  document.getElementById("toggle-search").classList.toggle("show");
  }
    
// Close the dropdown
window.onClick = function(event) {
  if (!event.target.matches('.search-button')) {
    var sideMenu = document.getElementsByClassName("nav-search");
    var i;
    for (i = 0; i < sideMenu.length; i++) {
      var openSideMenu = sideMenu[i];
      if (openSideMenu.classList.contains('show')) {
        openSideMenu.classList.remove('show');
      }
    }
  }
}

//   Play Video On Mouse Hover
var figure = $(".video-hover").hover( hoverVideo, hideVideo );
function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}
function hideVideo(e) {
    e.preventDefault()
    $('video', this).get(0).load(); 
}

// Video JS
var player = videojs('my-video', {
    fill: true
  });


// Limit Characters
$(document).ready(function(){
  var x = document.getElementById("toggle_height");
  $("#toggle_height").click(function(){
     $(".toggleHeight").toggleClass("toggleDetails");
     
  if (x.innerHTML === "Show More") {
    x.innerHTML = "Show Less";
  } else {
    x.innerHTML = "Show More";
  }
  });
});


