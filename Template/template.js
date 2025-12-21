const nav = document.querySelector('nav');
const links = document.querySelector('.header-links');
const navOffsettop =  nav.offsetTop;
const navMobile = document.querySelector('.mobile-nav');
const mobilenCon = document.querySelector('.mobile-menu-container')

const body = document.body

window.addEventListener('scroll', () => {
    if(window.pageYOffset > navOffsettop){
        nav.classList.add('sticky');
        navMobile.classList.add('stickyMobile');
        mobilenCon.classList.add('stickyMobileContainer');
        body.style.marginTop = "100px";
        links.style.opacity = '0';
    }
    else{
        nav.classList.remove('sticky');
        navMobile.classList.remove('stickyMobile');
        mobilenCon.classList.remove('stickyMobileContainer');
        body.style.marginTop = "0";
        links.style.opacity = '100';
    }
})

// mobile menu icon
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.cross-icon');
const mobileMenuContainer = document.querySelector ('.mobile-menu-container');
let mobileMenuContainerSticky = document.querySelector('.mobile-menu-container.stickyMobileContainer')

menuIcon.addEventListener('click', () => {
    mobileMenuContainer.classList.add('active');
    menuIcon.classList.add('erase');
    mobileMenuContainerSticky.classList.add('active');

})

closeIcon.addEventListener('click', () => {
    mobileMenuContainer.classList.remove('active');
    menuIcon.classList.remove('erase');
    mobileMenuContainerSticky.classList.add('active');
})