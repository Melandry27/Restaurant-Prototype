function createContact() {
	const contact = document.createElement("div");
	contact.setAttribute("id", "contact-container");

	const aboutTitle = document.createElement("h2");
	aboutTitle.setAttribute("id", "contact-title");
	aboutTitle.textContent = "Contact Us ";

	const mailPreText = document.createElement("p");
	mailPreText.setAttribute("id", "mailPreText");
	mailPreText.innerHTML = "My Mail Adresse :";

	const mailText = document.createElement("a");
	mailText.setAttribute("id", "mailText");
	mailText.setAttribute("href", "mailto:msmelandry@hotmail.fr");
	mailText.innerHTML = "msmelandry@hotmail.fr";

	const numberPreText = document.createElement("p");
	numberPreText.innerHTML = "My Number :";
	numberPreText.setAttribute("id", "numberPreText");

	const numberText = document.createElement("p");
	numberText.innerHTML = "+33611792551";
	numberText.setAttribute("id", "numberText");

	contact.appendChild(aboutTitle);
	contact.appendChild(mailPreText);
	contact.appendChild(mailText);
	contact.appendChild(numberPreText);
	contact.appendChild(numberText);

	return contact;
}

function setBtn() {
	const getMain = document.getElementById("main-content");

	while (getMain.firstChild) {
		getMain.removeChild(getMain.firstChild);
	}
}

function loadContact() {
	const getMainDiv = document.getElementById("main-content");

	setBtn();

	getMainDiv.appendChild(createContact());
}

export default loadContact;
