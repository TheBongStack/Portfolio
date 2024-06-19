let preloader=document.getElementById("preloader");
window.addEventListener("load", () => {
  preloader.classList.add("fadeout");
  setTimeout(() => (preloader.style.display = "none"), 3010);
});
let readMoreBtn=document.getElementById("readmore");
let readMoreBtnIcon=readMoreBtn.children[0];
let aboutcontwrap=document.getElementsByClassName("about_content_wrapper");
readMoreBtn.addEventListener("click", (e)=>{
    document.getElementById("expandable").classList.toggle("expandClass");
    readMoreBtnIcon.classList.toggle("fa-angles-down");
    readMoreBtnIcon.classList.toggle("fa-angles-up");
});
let resetbtn=document.getElementById("reset_btn");
let submitbtn = document.getElementById("submit_btn");
submitbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let data= new FormData(document.getElementsByClassName("contact_form")[0]);
    fetch("", {
        method: "POST",
        body: data
    });
    document.getElementsByClassName("contact_form")[0].reset();
})
resetbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementsByClassName("contact_form")[0].reset();
});
let xpscroll=document.getElementById("experience_container");
let xpbox=document.getElementsByClassName("experience_box")[0];
let leftscrollbtn = document.getElementById("leftScroll");
let rightscrollbtn = document.getElementById("rightScroll");
leftscrollbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    xpscroll.scrollLeft-=xpbox.offsetWidth;
})
rightscrollbtn.addEventListener("click", (e) => {
    e.preventDefault();
    xpscroll.scrollLeft+=xpbox.offsetWidth;
});
let hireme=document.getElementById("hire_me");
hireme.addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById("confirmation").classList.toggle("bringup");
});
document.getElementById("closeconfirmation").addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById("confirmation").classList.toggle("bringup");
});
let sections=document.querySelectorAll("section");
let navlinks=document.querySelectorAll("nav a");
window.onscroll=()=>{
    sections.forEach(section=>{
        let top=window.scrollY;
        let height=section.offsetHeight;
        let offset=section.offsetTop - document.querySelector("header").offsetHeight;
        let id=section.getAttribute("id");
        if(top>=offset && top<(offset+height)){
            navlinks.forEach(link=>{
                link.classList.remove("active");
                if(link.getAttribute("href")==`#${id}`) link.classList.add("active");
            })
        }
    })
}