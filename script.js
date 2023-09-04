const links = document.querySelectorAll(".nav-link");
const miniute = document.querySelector("#min");
const second = document.querySelector("#sec");

links.forEach((e)=>{
    e.addEventListener("click",()=>{
        links.forEach((val)=>{
            val.classList.remove("active")
        })
        e.classList.add("active");
    })
})


let sec = 60;
let min = 20;

setInterval(()=>{
    second.innerText = sec;
    sec--;
    if(sec==0){
        sec = 60;
        min--;
        miniute.innerText = min;
    }
},1000)