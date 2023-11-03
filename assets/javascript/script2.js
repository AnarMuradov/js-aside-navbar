const button =document.querySelectorAll(".btn1")

console.log("1"-     -"1");




button.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.nextElementSibling.style.filter="none"
    })
})