/// NAVIGATION BAR for more.html ///
// Add nav-bar dynamically (programmatically)
function insertNavBar() {

  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
}


insertNavBar();
////////////////////////////////////////////////

/// FOOTER ///
// Add footer dynamically (programmatically)
function insertFooter() {
  // create header for name
  let ft = document.getElementById("footer");
  ft.classList.add("footer");
  

 

  // create social buttons
  soc = document.createElement("div");
  a = document.createElement("a");
  let git = "<i class='fa-brands fa-github-square fa-inverse fa-2xl'></i>";
  a.innerHTML = git;
  a.classList.add("social");
  a.classList.add("git");
  a.setAttribute("href", "https://github.com");
  soc.appendChild(a);
  ft.appendChild(soc);
}

insertFooter();
////////////////////////////////////////////////


