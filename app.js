const timer__day =  document.querySelector(".timer__day");
const timer__hour = document.querySelector(".timer__hour");
const timer__min = document.querySelector(".timer__min");
const timer__sec = document.querySelector(".timer__sec");
 
function getTimeDiffrence(start , end){
  let milliseconds = Math.floor(end - start);
  let seconds = Math.floor(milliseconds / 1000);
  let minute = Math.floor(seconds / 60);
  let hour = Math.floor(minute / 60);
  let day = Math.floor(hour / 24);

  hour = hour - (day * 24);
  minute = minute - (day * 24 * 60) - (hour * 60);
  seconds = seconds - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);

  return {
    rDays : day,
    rHour : hour ,
    rMinute : minute , 
    rSec : seconds
  }
}

let countDownTimer = setInterval(function(){
  
  let currentDate = new Date();
  let endDate = new Date("November 5, 2022, 12:00:00");
  let timeDiffrentObj = getTimeDiffrence(currentDate , endDate);
  
  timer__day.innerHTML = timeDiffrentObj.rDays;
  timer__hour.innerHTML = timeDiffrentObj.rHour;
  timer__min.innerHTML = timeDiffrentObj.rMinute;
  timer__sec.innerHTML = timeDiffrentObj.rSec;
 
} , 1000);

















