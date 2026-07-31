const items = document.querySelectorAll("#menu li");
let selected = 0;

function updateMenu() {
    items.forEach((item, index) => {
        if (index === selected) {
            item.classList.add("selected");
        } else {
            item.classList.remove("selected");
        }
    });
}

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowDown") {
        selected++;
        if (selected >= items.length) selected = 0;
        updateMenu();
    }

    if (e.key === "ArrowUp") {
        selected--;
        if (selected < 0) selected = items.length - 1;
        updateMenu();
    }

    if (e.key === "Enter") {
        alert("Demo: " + items[selected].textContent);
    }

});

function updateClock() {
    const now = new Date();

    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");

    document.getElementById("clock").textContent = h + ":" + m;
}

setInterval(updateClock, 1000);
updateClock();
updateMenu();
