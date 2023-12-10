// Search menu

const openSearchButton = document.querySelector("header button:nth-of-type(1)");
const searchMenu = document.querySelector("header form");
const sluitSearchButton = document.querySelector("header form button");

openSearchButton.onclick = toonSearchMenu;

sluitSearchButton.onclick = sluitSearchMenu;

function toonSearchMenu() {
    searchMenu.classList.add("inBeeld");
    document.documentElement.classList.add("inBeeld");
}

function sluitSearchMenu() {
    searchMenu.classList.remove("inBeeld");
    document.documentElement.classList.remove("inBeeld");
}


// Navigation menu 

const openMenuButton = document.querySelector("header button:nth-of-type(2)");
const navMenu = document.querySelector("header nav");
const sluitMenuButton = document.querySelector("header nav button");

openMenuButton.onclick = toonNavMenu;

sluitMenuButton.onclick = sluitNavMenu;

function toonNavMenu() {
    navMenu.classList.add("inBeeld");

    document.documentElement.classList.add("inBeeld");
}

function sluitNavMenu() {
    navMenu.classList.remove("inBeeld");
    document.documentElement.classList.remove("inBeeld");
}


// Open Programs lijst met science en education

var programs = document.querySelector("header nav > ul > li:nth-of-type(2)");
var programsLi = document.querySelector("header nav ul li:nth-of-type(2) > ul");

programs.onclick = togglePrograms;

function togglePrograms() {
	programsLi.classList.toggle("open");
}