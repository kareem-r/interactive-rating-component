let lis=document.querySelectorAll("ul li")
lis.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        let span=document.getElementById('num')
        span.innerHTML=e.target.innerHTML})
})
lis.forEach((li)=>{
    li.addEventListener("click",function removeactive(){
        lis.forEach((li)=>{
            li.classList.remove("active")
            this.classList.add("active")
        })
    })

})

let boxback=document.querySelector('.box-back')
let box=document.querySelector('.box')
let submit=document.querySelector('.sub')
submit.addEventListener("click",()=>{
    boxback.style.display='block'
    box.style.display='none'
})











