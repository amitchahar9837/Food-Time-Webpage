//showing navbar when click menu on mobile view
let menuToggleBtn=document.querySelector(".menu-toggle");
let sidebar=document.querySelector(".sidebar");
console.log(menuToggleBtn);
menuToggleBtn.addEventListener('click',()=>{
    // sidebar.style.display="flex";
    menuToggleBtn.classList.toggle("is-active");
    sidebar.classList.toggle("active");
})
//close menu when click
sidebar.addEventListener("click",function(){
    const menuBars=document.querySelector(".is-active");
    if(window.innerWidth<=1200 && menuBars){
        menuToggleBtn.classList.toggle("is-active");
        sidebar.classList.toggle("active");
    }
})


//move the menu to right and left when click back and next
var step = 100;
var stepFilter = 60;
var scrolliing = true;
$(".back").bind('click',function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"-=" + step + "px"
    });
});
$(".next").bind('click',function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"+=" + step + "px"
    });
});

//when click on back and next on menu filter
$(".back-menus").bind('click',function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft:"-=" + step + "px"
    });
});
$(".next-menus").bind('click',function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft:"+=" + step + "px"
    });
});
//Website Loader Animation
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');  
  }
  function fadeOut(){
    setTimeout(loader,3000);
  }
  window.onload=fadeOut;