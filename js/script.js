window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar")
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    
    console.log(navbar)
    // document.getElementById("navbar").style.padding = "30px 10px";
    // document.getElementById("navbar").style.background = "red !important";
    //After Scroll
    navbar.classList.add("navbar-move");
    
  } else {
    // document.getElementById("navbar").style.background = "pink !important";
    //Before Scroll
    navbar.classList.remove("navbar-move")
  }
}