const body = document.querySelector("body") ,
    modeToggle = body.querySelector(".mode-toggle") , 
    sidebarToggle = document.querySelector(".sidebar-toggle") ,
    sidebar = document.querySelector("nav")

modeToggle.addEventListener("click" , ()=>{
    body.classList.toggle("dark")
})

sidebarToggle.addEventListener("click" , ()=>{
    sidebar.classList.toggle("close")
})



window.addEventListener('resize', ()=>{

    if (window.innerWidth > 376) {
        // Then log this message to the console
        sidebar.classList.toggle("close")
      } else {
        sidebar.classList.toggle("close")
      }

});
