const listItemsMenu = document.querySelectorAll(".menu-item");
const anchorLinks = document.querySelectorAll("a.menu-item");

function smoothAnimationInAnchorLink(event, link) {
	event.preventDefault();

	const section = document.querySelector(link.getAttribute("href"));
	section.scrollIntoView({
		inline: "center",
		block: "center",
		behavior: "smooth"
	});
}

function addOnClickInAnchorLink(anchorLink) {
	anchorLink.addEventListener(
		"click", 
		(e) => smoothAnimationInAnchorLink(e, anchorLink)
	);
}

anchorLinks.forEach(addOnClickInAnchorLink);
