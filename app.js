// Scroll top
const scrollTop=document.querySelector("#scroll-top")
scrollTop.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
});
window.addEventListener("scroll",  function(){
    if(window.scrollY >=500){
        scrollTop.style.opacity=1;
    }
    else{
        scrollTop.style.opacity=0;
    }
});

// Theme
const themeToggle= document.querySelector("#checkbox");
const body=document.querySelector("body");
const darkMode=localStorage.getItem("dark");

if (darkMode) {
    body.classList.add("dark");
    themeToggle.checked=true;
};
themeToggle.addEventListener("change", function(){
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("dark", "active");
    } 
    else {
        localStorage.removeItem("dark");
    }
});
