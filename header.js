let header = document.querySelector("header section");
let headerText = document.querySelectorAll("header section ul li a")
window.addEventListener("scroll",() => {
    if(window.pageYOffset != 0){
        header.style.backgroundColor = "rgba(0,0,0,0.7)";
        header.style.color = "white";
        headerText.forEach(a => {
            a.style.color = "white"
        })
    }else{
        header.style = "";
        headerText.forEach(a => {
            a.style ="";
        })
    }
    
})
