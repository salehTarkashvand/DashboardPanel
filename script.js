const body = document.querySelector("body") ,
    modeToggle = body.querySelector(".mode-toggle") , 
    sidebarToggle = document.querySelector(".icon") ,
    sidebar = document.querySelector("nav")

modeToggle.addEventListener("click" , ()=>{
    body.classList.toggle("dark")
})

sidebarToggle.addEventListener("click" , ()=>{
    sidebar.classList.toggle("close") 
})



window.addEventListener('resize', ()=>{

    if (window.innerWidth < 600) {
        // Then log this message to the console
        sidebar.className = `${sidebar.className} close`
      } 
      else{
        
        sidebar.className =  sidebar.className.toString ;
      }    

});
