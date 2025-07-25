const moreDetails = document.getElementById("more-content");
const cards = document.querySelectorAll("#hiddenLoad");

moreDetails.addEventListener("click", (e) => {
  e.preventDefault();
  cards.forEach((card) => {
    card.classList.toggle("hidden");
    card.style.transition = "all 0.5s ease-in-out";
  });
  if (moreDetails.textContent === "Show Less") {
    moreDetails.textContent = "more project";
  } else {
    moreDetails.textContent = "Show Less";
  }
});
