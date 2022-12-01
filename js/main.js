
const modal = document.getElementById("modal");
const closebtn = document.getElementById("close__btn");

const openbtn = document.getElementById("open-btn");


openbtn.addEventListener("click", () => {
    modal.style.display="flex"
    modal.showModal();
});

closebtn.addEventListener("click", () => {
    modal.style.display="none"
    modal.closest();
});