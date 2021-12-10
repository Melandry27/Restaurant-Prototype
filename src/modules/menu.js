function createFood(src, text, price, alt, height, width) {
	const food = document.createElement("div");
	food.setAttribute("class", "food");

	const img = document.createElement("img");
	img.setAttribute("src", src);
	img.setAttribute("alt", alt);
	img.setAttribute("height", height);
	img.setAttribute("width", width);

	const description = document.createElement("div");
	description.classList.add("description");

	const foodName = document.createElement("h3");
	foodName.textContent = text;

	const foodPrice = document.createElement("h2");
	foodPrice.textContent = price;

	description.appendChild(foodName);
	description.appendChild(foodPrice);

	food.appendChild(img);
	food.appendChild(description);
	return food;
}

function setBtn() {
	const getMain = document.getElementById("main-content");

	while (getMain.firstChild) {
		getMain.removeChild(getMain.firstChild);
	}
}

function loadMenu() {
	const getMainDiv = document.getElementById("main-content");

	getMainDiv.textContent = "";
	setBtn();

	const foods = [
		createFood(
			"https://medias.delarte.fr/media/sys_master/images/hbe/h1f/8855982800926.png",
			"SPECIALE PIZZAIOLO",
			"10$",
			"Pizza Margarita",
			"400px",
			"500px",
		),
		createFood(
			"https://medias.delarte.fr/media/sys_master/images/hf1/h6d/8855990272030.png",
			"REGINA",
			"9$",
			"Pizza Margarita",
			"400px",
			"500px",
		),
		createFood(
			"https://medias.delarte.fr/media/sys_master/images/hdb/he8/8855994204190.png",
			"5 FORMAGGI",
			"8$",
			"Pizza Margarita",
			"400px",
			"500px",
		),
		createFood(
			"https://medias.delarte.fr/media/sys_master/images/h5e/hcf/8856958468126.png",
			"CARBONARA",
			"7$",
			"Pizza Margarita",
			"400px",
			"500px",
		),
	];

	foods.forEach((food) => {
		getMainDiv.appendChild(food);
	});
}

export default loadMenu;
