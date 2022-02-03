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

/* ============= MENU LINKS ============= */