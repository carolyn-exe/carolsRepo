
const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const modalContent = document.querySelector(".modal-content");

for (const card of cards) {

    card.addEventListener("click", function () {
        modalOverlay.classList.add("active");
        modalContent.innerHTML = card.innerHTML;
    });
} 
document.querySelector(".modal > .fechar").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("p");
})