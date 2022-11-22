const primaryNav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(".hambgrbtn");
// const blur = document.querySelector(".container");

navToggle.addEventListener('click', ()=>{
    const visibility = primaryNav.getAttribute("data-visible");
    // blur.classList.toggle("active");
    if (visibility === "false"){
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        
    }
})