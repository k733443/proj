const background = document.querySelector(".backgroundModal");
const modal = document.querySelector(".modal");
const data = [
  {
    id: "1",
    src: "./img/franch1.svg",
    title: "Nantes",
    text: " 10 753 готелів",
  },
  {
    id: "2",
    src: "./img/franch2.svg",
    title: "Montpellier",
    text: "11 386 готелів",
  },
  { id: "3", src: "./img/franch3.svg", title: "Paris", text: "12 278 готелів" },
];
const dataSecond = [
  {
    id: "4",
    src: "./img/itali1.svg",
    title: "Venezia",
    text: "14 120 готелів",
  },
  { id: "5", src: "./img/itali2.svg", title: "Firenze", text: "7 988 готелів" },
  { id: "6", src: "./img/itali3.svg", title: "Roma", text: "12 809 готелів" },
];
const dataFirst = [
  { id: "7", src: "./img/spain1.svg", title: "Selvi", text: "8 984 готелів" },
  { id: "8", src: "./img/spain2.svg", title: "Madrid", text: "15 325 готелів" },
  {
    id: "9",
    src: "./img/spain3.svg",
    title: "Mallorca",
    text: "9 825 готелів",
  },
];
const close = document.querySelector(".modal-close");
console.log(background);
const arrList = document.querySelectorAll(".country-list");
function fnA(event) {
  if (event.code === "Escape") {
    background.classList.add("is-hidden");
  }
}

close.addEventListener("click", (event) => {
  event.stopPropagation();
  background.classList.add("is-hidden");
});
background.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    background.classList.add("is-hidden");
  }
});
arrList[0].addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    return;
  }
  background.classList.remove("is-hidden");
  window.addEventListener("keydown", fnA);
  const liEl = event.target.closest(".country-list-item");
  const id = liEl.dataset.id;
  const dataCard = data.find((elem) => {
    console.log(elem);
    return elem.id === id;
  });
  modal.innerHTML = `
<button class="modal-close" type="button">
<img class="modal-close-lineF" src="./img/Line-1.svg" alt="Line" />
<img class="modal-close-lineS" src="./img/Line-2.svg" alt="Line" />
</button>
<img class ="country-list-item-img" src="${dataCard.src}" alt="${dataCard.title}"/>
<h4 class="country-list-item-title">${dataCard.title}</h4>
<p class="country-list-item-text">${dataCard.text}</p>`;
});

arrList[1].addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    return;
  }
  background.classList.remove("is-hidden");
  window.addEventListener("keydown", fnA);
  const liEl = event.target.closest(".country-list-item");
  const id = liEl.dataset.id;
  const dataCard = dataSecond.find((elem) => {
    console.log(elem);
    return elem.id === id;
  });
modal.innerHTML = `
<button class="modal-close" type="button">
<img class="modal-close-lineF" src="./img/Line-1.svg" alt="Line" />
<img class="modal-close-lineS" src="./img/Line-2.svg" alt="Line" />
</button>
<img class ="country-list-item-img" src="${dataCard.src}" alt="${dataCard.title}"/>
<h4 class="country-list-item-title">${dataCard.title}</h4>
<p class="country-list-item-text">${dataCard.text}</p>`;
});

arrList[2].addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    return;
  }
  background.classList.remove("is-hidden");
  window.addEventListener("keydown", fnA);
  const liEl = event.target.closest(".country-list-item");
  const id = liEl.dataset.id;
  const dataCard = dataFirst.find((elem) => {
    console.log(elem);
    return elem.id === id;
  });
modal.innerHTML = `
<button class="modal-close" type="button">
<img class="modal-close-lineF" src="./img/Line-1.svg" alt="Line" />
<img class="modal-close-lineS" src="./img/Line-2.svg" alt="Line" />
</button>
<img class ="country-list-item-img" src="${dataCard.src}" alt="${dataCard.title}"/>
<h4 class="country-list-item-title">${dataCard.title}</h4>
<p class="country-list-item-text">${dataCard.text}</p>`;
});
window.addEventListener("keydown", fnA);
window.removeEventListener("keydown", fnA);
