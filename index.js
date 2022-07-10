let second = document.getElementById('seconde')
let minut = document.getElementById('minut');
let hour = document.getElementById('houre');

let start = document.getElementById('btn1');
let reset = document.getElementById('btn2');

var ids;
var idm;
var idh;
let i = 0;



function count() {

   i = i + 1;
   if (i == 1) {
      ids = setInterval(function () {
         ; second.innerText = Number(second.innerText) + 1;
         if (second.innerText == 60) {
            second.innerText = 0;
         }
      }, 1000);
      idm = setInterval(function () {
         minut.innerText = Number(minut.innerText) + 1;
         if (minut.innerText == 60) {
            minut.innerText = 0;
         }
      }, 60000);
      idh = setInterval(function () {
         hour.innerText = Number(hour.innerText) + 1;
         if (hour.innerText == 24) {
            hour.innerText = 0;
         }
      }, 3600000);
   }


   if (i == 2) {

      clearInterval(ids);
      clearInterval(idm);
      clearInterval(idh);
      i = 0;

   }

}

function Reset() {
   if (i == 0) {
      minut.innerText = 0;
      second.innerText = 0;
      hour.innerText = 0;


   }
}
start.addEventListener('click', count);
reset.addEventListener('click', Reset);



