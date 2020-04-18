var navItemElectronics = document.querySelector("#electronics");
var contentPanel = document.querySelector(".content-panel");
var contentBackdrop = document.querySelector(".content-backdrop");
var main = document.querySelector('main');
var electronicsArrowLink = document.querySelector('#electronics-arrow-link');
var electronicsArrow = document.querySelector('#electronics-arrow');
var electronicsList = document.querySelector('.electronics-list');
var toggleButton = document.querySelector('.toggle-button');
var sideNav = document.querySelector(".side-nav");
var itemImg = document.querySelector(".item-img");
var login = document.querySelector("#loginlink");
var mobileLogin = document.querySelector("#mobileloginlink");
var fullBackdrop = document.querySelector(".full-backdrop");
var loginModal = document.querySelector(".login-modal");

login.addEventListener("click", function(){
    fullBackdrop.classList.add("open-full-backdrop");
    loginModal.classList.add("open-modal");
})

mobileLogin.addEventListener("click", function(){
    fullBackdrop.classList.add("open-full-backdrop");
    loginModal.classList.add("open-modal");
    sideNav.classList.remove("open-flex");
    contentBackdrop.classList.remove("open-backdrop");
})

fullBackdrop.addEventListener("click", function(){
    fullBackdrop.classList.remove("open-full-backdrop");
    loginModal.classList.remove("open-modal");
})

navItemElectronics.addEventListener("mouseover", function(){
    contentPanel.classList.add("open-flex");
    navItemElectronics.classList.add("active");
    contentBackdrop.classList.add("open-backdrop");
})

contentPanel.addEventListener("mouseleave", function(){
    contentPanel.classList.remove("open-flex");
    navItemElectronics.classList.remove("active");
    contentBackdrop.classList.remove("open-backdrop");
})

electronicsArrowLink.addEventListener("click", function(){
    if(!electronicsArrow.classList.contains('arrow-transform')){
        electronicsArrow.classList.add("arrow-transform");
        electronicsList.classList.add("open");
    }else{
        electronicsArrow.classList.remove("arrow-transform");
        electronicsList.classList.remove("open");
    }
})

toggleButton.addEventListener("click", function(){
    sideNav.classList.add("open-flex");
    contentBackdrop.classList.add("open-backdrop");
})

contentBackdrop.addEventListener("click", function(){
    sideNav.classList.remove("open-flex");
    contentBackdrop.classList.remove("open-backdrop");
})

itemImg.addEventListener("mouseenter", function(){
    
})