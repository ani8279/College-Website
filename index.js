let slideImg = document.getElementsByClassName('slideImg');
let count = document.getElementById('count');
let dot = document.getElementsByClassName('dot');
console.log(dot);
dot[0].style.background = "#6c6767";

console.log(count);

console.log(slideImg);

let next = 1;

setInterval(function(){
  if(next>slideImg.length)
   next = 1;
  for(let i = 0;i < slideImg.length;i++){
      slideImg[i].style.display = 'none';
      dot[i].style.background = "#bbb";
    }
  
    slideImg[next-1].style.display = 'block';
    dot[next-1].style.background = "#6c6767";
    count.innerHTML = `0${next}/03`;
  
  next++;
},3000);


