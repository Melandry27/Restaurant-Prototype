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
			"https://media.gettyimages.com/photos/directly-above-shot-of-pizza-picture-id1183163714?k=20&m=1183163714&s=612x612&w=0&h=QDSJMt2nJwAvme_sccLNfSOs6JP2GTOgiOR2lnoLFqw=",
			"Pizza Margarita",
			"10$",
			"Pizza Margarita",
			"400px",
			"500px"
		),
		createFood(
			"https://media-cdn.tripadvisor.com/media/photo-s/17/31/41/ff/bresaola.jpg",
			"Pizza Margarita",
			"9$",
			"Pizza Margarita",
			"400px",
			"500px"
		),
		createFood(
			"https://media-cdn.tripadvisor.com/media/photo-s/0d/bf/9f/67/dsc-1160-largejpg.jpg",
			"Pizza Margarita",
			"8$",
			"Pizza Margarita",
			"400px",
			"500px"
		),
		createFood(
			"https://img2.freepng.fr/20180206/rbw/kisspng-new-york-style-pizza-submarine-sandwich-french-fri-pizza-slice-png-file-5a795dc0c18fd0.6621830415179032967928.jpg",
			"Pizza Margarita",
			"7$",
			"Pizza Margarita",
			"400px",
			"500px"
		),
	];

	foods.forEach((food) => {
		getMainDiv.appendChild(food);
	});
}

export default loadMenu;
