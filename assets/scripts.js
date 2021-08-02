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


// Limit Description Characters
$(document).ready(function(){
  var x = document.getElementById("toggle_description");
  $("#toggle_description").click(function(){
     $(".toggleHeight").toggleClass("toggleDetails");
     
  if (x.innerHTML === "Show More") {
    x.innerHTML = "Show Less";
  } else {
    x.innerHTML = "Show More";
  }
  });
});

// Limit Reply Characters
$(document).ready(function(){
  var x = document.getElementById("toggle_reply");
  $("#toggle_reply").click(function(){
     $(".toggleHeight").toggleClass("toggleDetails");
     
  if (x.innerHTML === "Show More") {
    x.innerHTML = "Show Less";
  } else {
    x.innerHTML = "Show More";
  }
  });
});

function toggle(){ 
  var text = document.querySelector('#reply_comment').innerText;
  var textLength = text.length;
  var textLimit = '120'
  
  if (textLength > textLimit) {
    document.getElementById('toggle_reply').classList.add('showButton')
  }
  else {
    document.getElementById('toggle_reply').classList.add('hideButton')
  }
  };


// Enable Disable Button in Textarea
function checkfTextArea() {
  var textArea = document.getElementById("textArea");
  if(textArea.value==="") { 
           document.getElementById('formButtons').classList.add('formButtons');
       } else { 
           document.getElementById('formButtons').classList.remove('formButtons');
       }
   }


// Multitab Header
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Clear textarea Field
// function eraseText() {
//   var cl = document.getElementById("textArea").value = ' ';
//   if (cl.value===' '){
//  document.getElementById('formButtons').classList.add('formButtons');
// }
// console.log(cl)
// }