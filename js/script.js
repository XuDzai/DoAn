//----------------------------Menu-CARTEGORY------------------------------//
const itemSliderBar = document.querySelectorAll(".cartegory-left-li")
itemSliderBar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})

//----------------------------PRODUCT------------------------------//

const mota = document.querySelector(".mota");
const thongso = document.querySelector(".thongso");
    document.querySelector(".product-content-right-bottom-content-detail").style.display = "block";
    document.querySelector(".product-content-right-bottom-content-thongso").style.display = "none";

if(mota){
    mota.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-detail").style.display = "block";
        document.querySelector(".product-content-right-bottom-content-thongso").style.display = "none";
    })
}
if(thongso){
    thongso.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-detail").style.display = "none";
        document.querySelector(".product-content-right-bottom-content-thongso").style.display = "block";
    })
}

const btn = document.querySelector(".product-content-right-bottom-top")
if(btn){
    btn.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}

