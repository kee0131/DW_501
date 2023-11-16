const imgTag =document.querySelector("img")
const divTag=document.querySelector("#imgwrapper")
imgTag.addEventListener("click",function(){
    imgTag.classList.toggle("on")//toggle 있으면 삭제 없으면 생성
    divTag.classList.toggle("on")
})