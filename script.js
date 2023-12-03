let s = 0;
let m = 0;
let h = 0;
function timer(){
   s++;
   if(s==60){
    s=0;
    m++;
   }
   if(m==60){
    m=0;
    h++;
   }
  const H = h <= 9 ? `0${h}` : h;
  const M = m <= 9 ? `0${m}` : m;
  const S = s <= 9 ? `0${s}` : s;

  const currentTime = `${formattedH}:${formattedM}:${formattedS}`;
    document.getElementById('clock').innerHTML = currentTime;
   
}

setInterval(timer,1000);