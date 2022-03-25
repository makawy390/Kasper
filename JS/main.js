
let toggle = document.querySelector('.toggle');

toggle.onclick = function (){

     toggle.classList.toggle('toggle-menu');

     
}
let upToTop = document.querySelector(".top .fa-arrow-up");

window.onscroll = ()=>{
     if (this.scrollY > 500) {
          upToTop.classList.add("show"); 
     }
     else{
          upToTop.classList.remove("show"); 

     }
}
upToTop.onclick = ()=>{
     window.scrollTo({
          top: 0,
          behavior: "smooth"
     })
}
