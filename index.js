//for typing text//
var type=new Typed(".auto-typed",{
    strings:["FullStack Developer ","Coder","Engineering student"],
    typeSpeed:150,
    backspeed:150,
    loop:true
})

//circle skills
const circles =document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots =elem.getAttribute("data-dots");
    var marked =elem.getAttribute("data-percent");
    var percent =Math.floor(dots*marked/100);
    var points ="";
    var rotate =360/dots;

    for(let i=0;i<dots ;i++){
        points+=` <div class="points" style="--i:${i};--rot:${rotate}deg"></div>`
    }
    elem.innerHTML=points;
    const pointsMarked =elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++){
        pointsMarked[i].classList.add('marked')
    }
})
//active menu//
let menuLi =document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');
function activeMenu(){
    let len=section.length;
    while(--len && window.scrollY +97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove(" active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);