const searchBtn = document.getElementById("search-btn");
const searchInput = document.querySelector(".search-input")
searchBtn.addEventListener("click", function () {
    searchInput.classList.toggle("active-search");
});

document.querySelector("main").addEventListener("click", () => {
    searchInput.classList.remove("active-search");
});