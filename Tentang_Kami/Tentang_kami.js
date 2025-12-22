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

// scroll down animation
const observerOptions = {
    threshold: 0.4
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aktif');
            observer.unobserve(entry.target); 
        } 
    });
}, observerOptions);

const elemenAnimasi = document.querySelectorAll('.scroll-anim');
elemenAnimasi.forEach((el) => observer.observe(el));

// Hover untuk core-service
const coreService = document.querySelectorAll('.servicebox');

coreService.forEach((kotakCore) => {

    kotakCore.addEventListener('mouseenter', () => {
    kotakCore.classList.add('core-aktif');
    })

    kotakCore.addEventListener('mouseleave', () => {
    kotakCore.classList.remove('core-aktif');
    })
})

//Hover untuk core value
const coreValue = document.querySelectorAll('.kotak');
coreValue.forEach((kotakValue) => {
    kotakValue.addEventListener('mouseenter', () =>{
        kotakValue.classList.add('core-value-aktif');
    })

    kotakValue.addEventListener('mouseleave', () => {
        kotakValue.classList.remove('core-value-aktif')
    })
})
