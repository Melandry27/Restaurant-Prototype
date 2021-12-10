import loadPage from "./modules/initializer";
import loadHome from "./modules/home";
import loadContact from "./modules/contact";
import loadMenu from "./modules/menu";

function addEvent() {
	const homeBtn = document.getElementById("home");
	const contactBtn = document.getElementById("contact");
	const menuBtn = document.getElementById("menu");

	homeBtn.addEventListener("click", loadHome);
	contactBtn.addEventListener("click", loadContact);
	menuBtn.addEventListener("click", loadMenu);
}

function init() {
	loadPage();
	loadHome();
	addEvent();
}

init();
