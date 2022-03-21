console.log('hello world');

/* ============= TOGGLE MENU ============= */
const navMenu = document.getElementById('navigation');
const navOpen = document.getElementById('open-menu');
const navClose = document.getElementById('close-menu');

/* shows menu */
if (navOpen) {
    navOpen.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navOpen.classList.add('hide-toggle');
    });
};

/* hides menu */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navOpen.classList.remove('hide-toggle');
    })
}

/* ============= HIDE MENU ON LINK-CLICK ============= */
const links = document.querySelectorAll('.menu-icon');

links.forEach(n => console.log(n));

function hideMenu() {
    const navMenu = document.getElementById('navigation');
    navMenu.classList.remove('show-menu');
    navOpen.classList.remove('hide-toggle');
}

links.forEach(n => n.addEventListener('click', hideMenu));

/* ============= TRANSITIONS ============= */
/* Fade in */

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  //threshold: 1, // waits for the entire thing to be in the screen
  //rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

/* slide in */
const sliders = document.querySelectorAll('.slide-in');
sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})

/* ============= ACCORDIAN ============= */
const accordian = document.getElementsByClassName('accordian-content-box');

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener('click', function() {
    this.classList.toggle('active');
  })
}

/* ============= CHANGE THEME COLOR ============= */
const themeToggle = document.getElementById('theme-toggle');

let initialTheme = true;

function toggleTheme() {
  console.log('Toggling theme...');
  const root = document.documentElement;
  if (initialTheme) {
    root.style.setProperty('--first-color', 'hsl(8, 55%, 50%)');
    root.style.setProperty('--first-color-lighter', 'hsla(8, 55%, 50%, 0.301)');
    root.style.setProperty('--first-color-alt', 'hsl(8, 43%, 42%)');
    root.style.setProperty('--first-color-alt-lighter', 'hsla(0, 55%, 50%, 0.692)');
    root.style.setProperty('--text-color', 'hsl(8, 15%, 45%)');
    root.style.setProperty('--text-color-alt', 'hsl(8, 45%, 25%)');
    root.style.setProperty('--background-color', 'hsl(8, 60%, 98%)');
    root.style.setProperty('--background-color-alt', 'hsl(8, 29%, 76%)');
    initialTheme = false;
  } else {
    root.style.setProperty('--first-color', 'hsl(7, 94%, 40%)');
    root.style.setProperty('--first-color-lighter', 'hsla(7, 55%, 50%, 0.301)');
    root.style.setProperty('--first-color-alt', 'hsl(7, 63%, 22%)');
    root.style.setProperty('--first-color-alt-lighter', 'hsla(0, 55%, 50%, 0.692)');
    root.style.setProperty('--text-color', 'hsl(8, 15%, 85%)');
    root.style.setProperty('--text-color-alt', 'hsl(8, 25%, 75%)');
    root.style.setProperty('--background-color', 'hsl(8, 10%, 3%)');
    root.style.setProperty('--background-color-alt', 'hsl(8, 59%, 26%, 0.8)');
    initialTheme = true;
  }
}

themeToggle.addEventListener('click', toggleTheme);

/* ============= PARALLAX ============= */
function checkForWindowResize() {
  console.log(`Screen width: ${window.innerWidth}`);
  if (window.innerWidth >= 769) {
    console.log('large screen');
    let bg = document.getElementById('bg');
    let curtain = document.getElementById('curtain');
    let signs = document.getElementById('signs');
    let text = document.getElementById('home-title');

    window.addEventListener('scroll', function() {
      var value = window.scrollY;

      bg.style.top = value * 0.5 + 'px';
      text.style.top = value * 1 + 'px';
      curtain.style.top = value * 0.60 + 'px';
      curtain.style.left = -value * 0.05 + 'px';
    })
  }
}

window.addEventListener('resize', checkForWindowResize);

//runs initial function
checkForWindowResize();

/* ============= TESTING ============= */
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

/* ============= WINDOW MEASUREMENT HELPERS ============= */

function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
  
  setVw();
  window.addEventListener('resize', setVw);