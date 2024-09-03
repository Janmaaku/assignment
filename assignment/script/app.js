document.addEventListener("DOMContentLoaded", () => {
	const searchButton = document.getElementById("searchButton");
	const searchInput = document.getElementById("searchInput");

	// Initially hide the search input
	searchInput.style.display = "none";

	const toggleSearch = () => {
		if (searchInput.style.display === "none") {
			searchInput.style.display = "block";
			searchInput.focus(); // Automatically focus the input when shown
		} else {
			searchInput.style.display = "none";
		}
	};

	searchButton.addEventListener("click", toggleSearch);
	// Remove the mouseenter event listener
	// searchButton.addEventListener('mouseenter', toggleSearch);

});
