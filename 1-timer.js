import"./assets/styles-BUPvYVON.js";import{f as u,i as c}from"./assets/vendor-BbbuE1sJ.js";function l(e){const o=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:r,minutes:i,seconds:d}}let s=null;u("input#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],s&&s>new Date?t.startBtn.disabled=!1:(c.show({message:"Please choose a date in the future",color:"red",messageColor:"white",position:"topRight",layout:2,transitionIn:"fadeInLeft"}),t.startBtn.disabled=!0)}});const t={inputTime:document.getElementById("datetime-picker"),startBtn:document.querySelector("[data-start]"),clockface:document.querySelector(".js-clockface"),inputFlat:document.querySelector(".flatpickr-input"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};t.startBtn.disabled=!0;const m={intervalId:null,initTime:null,start(){this.initTime=s,this.intervalId=setInterval(()=>{this.tick()},1e3),t.startBtn.disabled=!0,t.inputFlat.disabled=!0,t.inputTime.disabled=!0},stop(){t.startBtn.disabled=!1,t.inputFlat.disabled=!1,clearInterval(this.intervalId)},tick(){const e=Date.now(),a=this.initTime-e,n=l(a);t.days.textContent=n.days<10?"0"+n.days:n.days,t.minutes.textContent=n.minutes.toString().padStart(2,"0"),t.seconds.textContent=n.seconds.toString().padStart(2,"0"),t.hours.textContent=n.hours.toString().padStart(2,"0"),a<1e3&&this.stop()}};t.startBtn.addEventListener("click",()=>{m.start()});
//# sourceMappingURL=1-timer.js.map
