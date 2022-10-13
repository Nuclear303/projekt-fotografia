const images = [
  "https://via.placeholder.com/1000/1000",
  "https://via.placeholder.com/1000/1000",
  "https://via.placeholder.com/1000/1000",
  "https://via.placeholder.com/1000/1000",
  "https://via.placeholder.com/1000/1000",
  "https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0008/55/e323e9f2939d2b6349c7fd586c67e007f04a6b55.png"
]
document.querySelector("header").style.backgroundImage =`url('${images[0]}')`;

document.querySelector(".counter").innerHTML = `<span class="count">1</span>/${images.length}`
document.querySelector(".next").addEventListener("click",_=>{
  if(document.querySelector(".count").textContent == images.length){
    document.querySelector(".count").textContent = "1";
    document.querySelector("header").style.backgroundImage =`url('${images[Number(document.querySelector(".count").textContent)-1]}')`;
  }
  else{
    document.querySelector(".count").textContent++;
    document.querySelector("header").style.backgroundImage =`url('${images[Number(document.querySelector(".count").textContent)-1]}')`;
  }
})
document.querySelector(".previous").addEventListener("click",_=>{
  if(document.querySelector(".count").textContent == "1"){
    document.querySelector(".count").textContent = images.length;
    document.querySelector("header").style.backgroundImage =`url('${images[Number(document.querySelector(".count").textContent)-1]}')`;
  }
  else{
    document.querySelector(".count").textContent--;
    document.querySelector("header").style.backgroundImage =`url('${images[Number(document.querySelector(".count").textContent)-1]}')`;
  }
})