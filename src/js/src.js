import {Garage} from "./garage.js";

export const garage = new Garage();
const body = document.querySelector("body");
const display = document.createElement("div");
const title = document.createElement("h1");
const subtitle = document.createElement("h2");

function start() {
    initPlates();
    display.setAttribute("id", "display");
    title.textContent = "Vehicle Enquiry Service";
    subtitle.textContent = "Enquire and store information about cars";
    body.appendChild(title);
    body.appendChild(subtitle); 
    body.appendChild(display); 
    loadData();
}

function loadData() {
    display.textContent = "Loading...";
    setTimeout(() => {
        display.textContent = "";
        initInput();
        garage.cars.forEach((car) => {
            initTable(car);
        });
    }, 3000);
}

function initPlates() {
    garage.add({'reg':'AA19 AAA'});
    garage.add({'reg':'Hv07 XOC'});
    garage.add({'reg':'RE10 WHU'});
    garage.add({'reg':'CK07 RHU'});
}

function initInput() {
    const textbox = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");
    const division = document.createElement("div");
    textbox.setAttribute("id", "input");
    textbox.setAttribute("type", "text");
    textbox.setAttribute("placeholder", "Enter VRN Here...")
    label.setAttribute("for", "input");
    division.setAttribute("id", "input-box")
    label.textContent = "Add Vehicle by Reg Number:";
    button.textContent = "Find";
    display.appendChild(label);
    display.appendChild(division);
    division.appendChild(textbox);
    division.appendChild(button);
    button.addEventListener("click", eventHandler);
    textbox.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            eventHandler();
        }
    })
}

function eventHandler() {
    const reg = document.querySelector("input").value.toUpperCase();
    if (reg !== "") {
        garage.add({'reg': reg});
        loadData(); 
    }
}

function initTable(Car) {
    const image = document.createElement("img");
    const headers = ["VRN", "Make", "Model", "Year"];
    const data = [Car.reg, Car.make, Car.model, Car.year];
    const table = document.createElement("table");

    table.setAttribute("id", "table");
    image.setAttribute("src", Car.image);
    image.setAttribute("alt", "Image of " + Car.reg)
    display.appendChild(table);
    table.appendChild(image);


    for (let i = 0; i < 4; i++) {
        const row = document.createElement("tr");
        table.appendChild(row);
        createCell(row, "th", headers[i]);
        createCell(row, "td", data[i]);
    }

}

function createCell(parentNode, type, string) {
    const cell = document.createElement(type);
    if (string) {
        cell.textContent = string;
    }
    parentNode.appendChild(cell);
}

window.addEventListener("garage-loaded", start, false);