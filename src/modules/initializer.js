function createHeader(id, text) {
	const headerContainer = document.createElement("header");
	headerContainer.setAttribute("id", id);

	const headerContent = document.createElement("h1");
	headerContent.textContent = text;

	headerContainer.appendChild(headerContent);

	return headerContainer;
}

function createNav() {
	const navContainer = document.createElement("nav");

	const navUl = document.createElement("ul");

	navContainer.appendChild(navUl);

	const navLink1 = document.createElement("a");
	const navLink2 = document.createElement("a");
	const navLink3 = document.createElement("a");

	navLink1.setAttribute("id", "home");
	navLink2.setAttribute("id", "menu");
	navLink3.setAttribute("id", "contact");

	navLink1.setAttribute("href", "#");
	navLink2.setAttribute("href", "#");
	navLink3.setAttribute("href", "#");

	const navLi1 = document.createElement("li");
	const navLi2 = document.createElement("li");
	const navLi3 = document.createElement("li");

	navLi1.appendChild(navLink1);
	navLi2.appendChild(navLink2);
	navLi3.appendChild(navLink3);

	navLink1.innerHTML = "Home";
	navLink2.innerHTML = "Menu";
	navLink3.innerHTML = "Contact";

	navUl.appendChild(navLi1);
	navUl.appendChild(navLi2);
	navUl.appendChild(navLi3);

	return navContainer;
}

function createMain() {
	const mainContent = document.createElement("div");
	mainContent.setAttribute("id", "main-content");

	return mainContent;
}

function createFooter(text) {
	const footerContainer = document.createElement("footer");
	footerContainer.setAttribute("id", "footer");

	const textFooter = document.createElement("p");
	textFooter.textContent = text;

	footerContainer.appendChild(textFooter);

	return footerContainer;
}

function loadPage() {
	const content = document.getElementById("content");

	//header
	const header = createHeader("header", "Gusto Pizza");
	content.appendChild(header);

	//nav
	const nav = createNav(
		"nav",
		"Home",
		"Menus",
		"Contact",
		"page-home",
		"page-menus",
		"page-contact"
	);
	content.appendChild(nav);

	//mainContent
	const mainContent = createMain();
	content.appendChild(mainContent);

	//footer
	const footer = createFooter("Copyright © 2021 Melandry");
	content.appendChild(footer);
}

export default loadPage;
