// ===========================
// ThePotato OS V0.3
// ===========================

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

// Elementos
const boot = document.getElementById("boot");
const bootText = document.getElementById("bootText");
const progress = document.getElementById("bootProgress");

const device = document.getElementById("device");

const menuElement = document.getElementById("menu");
const clock = document.getElementById("clock");
const status = document.getElementById("status");
const terminal = document.getElementById("terminal");

// ===========================
// Relógio
// ===========================

function updateClock(){

    const now = new Date();

    clock.textContent =
        String(now.getHours()).padStart(2,"0")
        + ":" +
        String(now.getMinutes()).padStart(2,"0");

}

setInterval(updateClock,1000);
updateClock();


// ===========================
// Menu
// ===========================

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

drawMenu();


// ===========================
// Teclado
// ===========================

document.addEventListener("keydown",(e)=>{

    if(device.style.display==="none") return;

    if(e.key==="ArrowDown"){

        current++;

        if(current>=menu.length)
            current=0;

        drawMenu();

    }

    if(e.key==="ArrowUp"){

        current--;

        if(current<0)
            current=menu.length-1;

        drawMenu();

    }

    if(e.key==="Enter"){

        status.textContent="RUNNING";

        terminal.innerHTML=
`
INITIALIZING...

${menu[current]}

██████████████████
`;

        setTimeout(()=>{

            status.textContent="READY";

            terminal.innerHTML=
`
${menu[current]}

MODULE READY
`;

            // aqui depois vamos fazer o Dpotato girar

        },1200);

    }

});


// ===========================
// Boot
// ===========================

device.style.display="none";

const bootMessages=[

"Booting kernel...",
"Loading drivers...",
"Loading modules...",
"Initializing Dpotato...",
"Starting interface..."

];

let percent=0;

const timer=setInterval(()=>{

    percent++;

    progress.style.width=percent+"%";

    if(percent<20)
        bootText.textContent=bootMessages[0];

    else if(percent<40)
        bootText.textContent=bootMessages[1];

    else if(percent<60)
        bootText.textContent=bootMessages[2];

    else if(percent<80)
        bootText.textContent=bootMessages[3];

    else
        bootText.textContent=bootMessages[4];

    if(percent>=100){

        clearInterval(timer);

        setTimeout(()=>{

            boot.style.display="none";

            device.style.display="block";

        },400);

    }

},25);
},20);
