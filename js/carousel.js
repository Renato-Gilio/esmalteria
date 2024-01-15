const controls = document.querySelectorAll(".control");
const items = document.querySelectorAll(".item");

let currentItem = 0;
const maxItems = items.length;
const scrollOptions = {
	inline: "center",
	behavior: "smooth"
};

function fromCurrentToNextItem(scrolls = true) {
	const currentScroolY = window.scrollY;

	if (!scrolls) currentItem++;

	if (currentItem >= maxItems)
		currentItem = 0;

	if (currentItem < 0)
		currentItem = maxItems - 1;

	items.forEach(item => item.classList.remove('current-item'));

	if (scrolls) {
		items[currentItem].scrollIntoView({
			...scrollOptions,
			block: "center"
		});
	} else {
		items[currentItem].scrollIntoView({
      ...scrollOptions,
    });

		window.scrollTo({ top: currentScroolY });
	}

	items[currentItem].classList.add("current-item");
}

function clickControl(control) {
	const isLeft = control.classList.contains("arrow-left");

	if (isLeft) currentItem -= 1;
	else currentItem += 1;

	fromCurrentToNextItem();
}

function runningCarousel(time) {
	setInterval(() => {
		fromCurrentToNextItem(false);
	}, time);
}

controls.forEach(control => {
	control.addEventListener("click", () => {
		clickControl(control);
	});
});

runningCarousel(5000);
