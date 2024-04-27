function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
var tablinks = document.getElementsByClassName("tab-links")
var tabcontainers = document.getElementsByClassName("tab-containers")

function openTab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontainer of tabcontainers){
    tabcontainer.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var dataText = ["Aspiring Web Developer", "Student","Gamer"]; // Add your text here
  var counter = 0;
  var element = document.getElementById("typewriter");
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      element.innerHTML = text.substring(0, i+1);
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 120);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
  
  function StartTextAnimation() {
    if (counter < dataText.length) {
      typeWriter(dataText[counter], 0, function(){
        setTimeout(StartTextAnimation, 2000);
      });
      counter++;
    } else {
      counter = 0;
      StartTextAnimation(); // Restart the loop
    }
  }
  
  StartTextAnimation();
