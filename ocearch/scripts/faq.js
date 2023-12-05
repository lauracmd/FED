// EERSTE FAQ LI //
var menuButton1 = document.querySelector(".faq li:first-of-type button");
var deEersteFaqLi = document.querySelector(".faq li:first-of-type");

menuButton1.onclick = toggleEersteDetails;

function toggleEersteDetails() {
	deEersteFaqLi.classList.toggle("open");
}



// TWEEDE FAQ LI //
var menuButton2 = document.querySelector(".faq li:nth-of-type(2) button");
var deTweedeFaqLi = document.querySelector(".faq li:nth-of-type(2)");

menuButton2.onclick = toggleTweedeDetails;

function toggleTweedeDetails() {
	deTweedeFaqLi.classList.toggle("open");
}



// DERDE FAQ LI //
var menuButton3 = document.querySelector(".faq li:nth-of-type(3) button");
var deDerdeFaqLi = document.querySelector(".faq li:nth-of-type(3)");

menuButton3.onclick = toggleDerdeDetails;

function toggleDerdeDetails() {
	deDerdeFaqLi.classList.toggle("open");
}



// VIERDE FAQ LI //
var menuButton4 = document.querySelector(".faq li:nth-of-type(4) button");
var deVierdeFaqLi = document.querySelector(".faq li:nth-of-type(4)");

menuButton4.onclick = toggleVierdeDetails;

function toggleVierdeDetails() {
	deVierdeFaqLi.classList.toggle("open");
}