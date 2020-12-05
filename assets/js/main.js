// EXPANDER MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x');
        })
    }
}

showMenu("header-toggle", "nav-menu");

// ACTIVE AND REMOVE MENU
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navLinks.forEach(nl => nl.classList.remove('active'));
    this.classList.add('active');
}

navLinks.forEach(nl => nl.addEventListener("click", linkAction))