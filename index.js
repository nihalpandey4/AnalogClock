
setInterval(clock,1000);

const hourHand=document.querySelector("[data-hour-hand]");
const minuteHand=document.querySelector("[data-minute-hand]");
const secondHand=document.querySelector("[data-second-hand]");

function clock(){
  const currentDate = new Date();
  const secondsRatio= currentDate.getSeconds()/60;
  const minutesRatio= (secondsRatio+currentDate.getMinutes())/60;
  const hourRatio= (minutesRatio+currentDate.getHours())/12;
  rotate(secondHand,secondsRatio);
  rotate(minuteHand,minutesRatio);
  rotate(hourHand,hourRatio);
}

function rotate(hand , value){
  hand.style.setProperty("--rotation",value*360);
}

clock();
