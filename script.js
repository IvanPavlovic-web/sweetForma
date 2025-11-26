// // Funkcija za footer da automatski azurira samo godinu

// const year = new Date().getFullYear();
// document.getElementById("year").textContent = year;
// document.getElementById("year-legal").textContent = year;

// // Funkcija za iskakanje elemenata
// const overviewWrappers = document.querySelectorAll(".overview-wrapper");
// const shopElements = document.querySelectorAll(".shop-el");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.2,
//   }
// );

// overviewWrappers.forEach((el) => observer.observe(el));
// shopElements.forEach((el) => observer.observe(el));

// // Funkcija za sve linkove da imaju smooth scroll za podeseni "id"

// document.querySelectorAll("[data-target]").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetSelector = this.getAttribute("data-target");
//     const target = document.querySelector(targetSelector);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

// // Funkcija za stvaranje smooth scroll efekta na dugme

// document.querySelector(".overview-btn").addEventListener("click", function () {
//   const target = document.querySelector(".shop-section");
//   if (target) {
//     target.scrollIntoView({ behavior: "smooth" });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // Automatsko ažuriranje godine u footeru
  const year = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  const yearLegalEl = document.getElementById("year-legal");
  if (yearEl) yearEl.textContent = year;
  if (yearLegalEl) yearLegalEl.textContent = year;

  // Intersection Observer za animaciju iskakanja elemenata
  const overviewWrappers = document.querySelectorAll(".overview-wrapper");
  const shopElements = document.querySelectorAll(".shop-el");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  overviewWrappers.forEach((el) => observer.observe(el));
  shopElements.forEach((el) => observer.observe(el));

  // Smooth scroll za linkove sa data-target atributom
  document.querySelectorAll("[data-target]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSelector = this.getAttribute("data-target");
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Smooth scroll za dugme overview-btn
  const overviewBtn = document.querySelector(".overview-btn");
  if (overviewBtn) {
    overviewBtn.addEventListener("click", () => {
      const target = document.querySelector(".shop-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Hamburger meni (za max-width: 480px)
  const hamburger = document.querySelector(".hamburger-btn");
  const navBox = document.querySelector(".nav-box");

  if (hamburger && navBox) {
    hamburger.addEventListener("click", () => {
      navBox.classList.toggle("open");
      hamburger.classList.toggle("open"); // dodaj ili ukloni klasu za X animaciju

      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !expanded);
    });
  }
});
