window.onscroll = function() {onScrollFunction()};

var topButton = document.getElementById("topButton");
var header = document.getElementById("menuHeader");
var sticky = header.offsetTop;

function onScrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
	topButton.style.display = "block";
  } 
  else {
    header.classList.remove("sticky");
	topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}