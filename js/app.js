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

// navbar

const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click',function (){
  document.querySelector('.nav-list').classList.toggle('show');
})

const hideNav = document.querySelector('.cmn');
hideNav.addEventListener('click',function (){
  document.querySelector('.nav-list').classList.remove('show');
})
const hideNav2 = document.querySelector('.cmn2');
hideNav2.addEventListener('click',function (){
  document.querySelector('.nav-list').classList.remove('show');
})
const hideNav3 = document.querySelector('.cmn3');
hideNav3.addEventListener('click',function (){
  document.querySelector('.nav-ist').classList.remove('show');
})
const hideNav4 = document.querySelector('.cmn4');
hideNav4.addEventListener('click',function (){
  document.querySelector('.nav-list').classList.remove('show');
})
const hideNav5 = document.querySelector('.cmn5');
hideNav5.addEventListener('click',function (){
  document.querySelector('.nav-list').classList.remove('show');
})



