function createAbout() {
	const about = document.createElement("div");
	about.setAttribute("id", "about");

	const aboutTitle = document.createElement("h2");
	aboutTitle.textContent = "ABOUT";

	const textContainer = document.createElement("div");
	textContainer.setAttribute("id", "textContainer");

	const aboutText = document.createElement("p");
	aboutText.textContent =
		"Lorem ipsum dolor sit amet. Et reprehenderit magni a sunt exercitationem aut doloremque in beatae galisum et nesciunt placeat et iusto maxime et facilis dolorum? Ut quas harum id odio rerum qui inventore expedita sed placeat explicabo! Sed modi excepturi sed repellat perferendis At consequuntur reiciendis ut quam totam. Vel voluptatem doloribus vel sapiente minima ut omnis omnis aut numquam dolorum est soluta itaque.";

	about.appendChild(aboutTitle);
	about.appendChild(textContainer);
	textContainer.appendChild(aboutText);

	return about;
}

function setBtn() {
	const getMain = document.getElementById("main-content");

	while (getMain.firstChild) {
		getMain.removeChild(getMain.firstChild);
	}
}

function loadHome() {
	const getMainDiv = document.getElementById("main-content");

	setBtn();

	getMainDiv.appendChild(createAbout());
}

export default loadHome;
