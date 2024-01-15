const menu = document.querySelector("#menu-mobile .menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburguer = document.querySelector(".hamburguer");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
	if (menu.classList.contains("show-menu")) {
		menu.classList.remove("show-menu");
		closeIcon.style.display = "none";
		menuIcon.style.display = "block";
	} else {
		menu.classList.add("show-menu");
		closeIcon.style.display = "block";
		menuIcon.style.display = "none";
	}
}

function initMenu() {
	menu.classList.remove("show-menu");
	closeIcon.style.display = "none";
	menuIcon.style.display = "block";
}

initMenu();

menuItems.forEach(menuItem => {
	menuItem.addEventListener("click", toggleMenu);
});

hamburguer.addEventListener("click", toggleMenu);
