const swiper = new Swiper(".swiper", {
  // Optional parameters
  
    autoplay: {
        delay: 4000,
        disabledOnInteraction: false,
    },
    
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const allBtns = document.querySelectorAll(".dugme");

allBtns.forEach((el) => el.addEventListener("click", function (e) {}));

let tester = false;
document.querySelectorAll(".swiper-slide").forEach((el) => {
  el.addEventListener("click", function (e) {
    tester = !tester;
    if (e.target.classList.contains("dugme")) {
      if (tester) {
        e.target.innerText = "Zatvori";
        e.target.nextElementSibling.style.display = "flex"
      } else {
        e.target.innerText = "Klikni za vise informacija";
        e.target.nextElementSibling.style.display = "none";
      }
    }
  });
});

document
  .querySelector(".swiper-button-next")
  .addEventListener("click", function () {
    tester = false;
    document
      .querySelectorAll(".dugme")
      .forEach((el) => (el.innerText = "Klikni za vise informacija"));
    document
      .querySelectorAll("h4")
      .forEach((el) => (el.style.display = "none"));
  });

document
  .querySelector(".swiper-button-prev")
  .addEventListener("click", function (e) {
    tester = false;
    document
      .querySelectorAll(".dugme")
      .forEach((el) => (el.innerText = "Klikni za vise informacija"));
    document
      .querySelectorAll("h4")
      .forEach((el) => (el.style.display = "none"));
  });
