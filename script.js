//Hamburger menu

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".mobile-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

//About me switching between work and education

const tablinks = document.getElementsByClassName("tab-links")
const tabcontainers = document.getElementsByClassName("tab-containers")

function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontainer of tabcontainers) {
    tabcontainer.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//Typewriter effect

const dataText = ["Junior Software Developer", "Bachelor of Engineering", "Gamer"];
var counter = 0;
const element = document.getElementById("typewriter");

function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    element.innerHTML = text.substring(0, i + 1);
    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback)
    }, 120);
  }
  else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700);
  }
}

function StartTextAnimation() {
  if (counter < dataText.length) {
    typeWriter(dataText[counter], 0, function () {
      setTimeout(StartTextAnimation, 2000);
    });
    counter++;
  } else {
    counter = 0;
    StartTextAnimation();
  }
}

StartTextAnimation();

//Animation for skills container

const detailsContainers = document.querySelectorAll('.details-container');


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.5 });


detailsContainers.forEach((container) => {
  observer.observe(container);
});

//Scroll fade-in

function isInViewport(element) {
  let rect = element.getBoundingClientRect();
  let threshold = 0.3 * window.innerHeight;
  return (
    rect.top <= threshold &&
    rect.bottom >= threshold
  );
}

function addActiveClass() {
  let sections = document.querySelectorAll('.fade-in');
  sections.forEach(function (section) {
    if (isInViewport(section)) {
      section.classList.add('active');
    }
  });
}

addActiveClass();

window.addEventListener('scroll', addActiveClass);

//Opening links

function openLink(url) {
  window.open(url, '_blank');
}