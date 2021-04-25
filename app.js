const link = document.querySelectorAll('ul li')

link.forEach((item)=>{
    item.addEventListener("click",()=>{
        document.querySelector("li.selected").classList.remove("selected");
        item.classList.add("selected")
    })
})