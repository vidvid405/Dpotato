// ===== ThePotato OS =====
const boot = document.getElementById("boot");
const progress = document.getElementById("bootProgress");
const device = document.getElementById("device");
device.style.display = "none";
const menu = [
    "Radio",
    "Infrared",
    "NFC",
    "RFID",
    "Bluetooth",
    "Utilities",
    "Games",
    "Settings",
    "About"
];

let current = 0;

const menuElement = document.getElementById("menu");
const clock = document.getElementById("clock");
const status = document.getElementById("status");
const terminal = document.getElementById("terminal");

function drawMenu(){

    menuElement.innerHTML="";

    menu.forEach((item,index)=>{

        const li=document.createElement("li");

        li.textContent=item;

        if(index===current){

            li.classList.add("selected");

        }

        menuElement.appendChild(li);

    });

}

function updateClock(){

    const now=new Date();

    const h=String(now.getHours()).padStart(2,"0");

    const m=String(now.getMinutes()).padStart(2,"0");

    clock.textContent=h+":"+m;

}

setInterval(updateClock,1000);

updateClock();

drawMenu();

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowDown"){

        current++;

        if(current>=menu.length) current=0;

        drawMenu();

    }

    if(e.key==="ArrowUp"){

        current--;

        if(current<0) current=menu.length-1;

        drawMenu();

    }

    if(e.key==="Enter"){

        status.textContent="RUNNING";

        terminal.innerHTML=

`INITIALIZING...

${menu[current]}

██████████████████`;

        setTimeout(()=>{

            status.textContent="READY";

            terminal.innerHTML=

`${menu[current]}

MODULE READY`;

        },1200);

    }

});
let value = 0;

const timer = setInterval(()=>{

    value++;

    progress.style.width = value + "%";

    if(value>=100){

        clearInterval(timer);

        boot.style.display="none";

        device.style.display="block";

    }

},20);
