"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

// Testimonials data (for unique modals)
const testimonialsData = {
  1: {
    title: "Abdullah Sarfaraz",
    date: "2024-03-10",
    text: "Ahmad developed a Crowd Emotion Detection System for our event monitoring application. The system’s ability to classify emotions in real time was remarkable, achieving high accuracy even under challenging conditions. His expertise in CNNs, TensorFlow, and OpenCV significantly contributed to the success of our project.",
    img: "./assets/images/avatar-1.png",
  },
  2: {
    title: "Sophia Williams",
    date: "2024-09-15",
    text: "We engaged Ahmad to design an automated Resume Parsing Model for our recruitment platform. The system is robust and has streamlined our recruitment process, saving us significant time and effort.",
    img: "./assets/images/avatar-2.png",
  },
  3: {
    title: "Clara Brown",
    date: "2024-01-20",
    text: "Ahmad’s work on our Amazon Reviews’ Analysis System was exceptional. The system’s accuracy and efficiency in handling large datasets have been invaluable for our review analysis efforts.",
    img: "./assets/images/avatar-3.png",
  },
  4: {
    title: "Zahoor Anwar",
    date: "2024-11-05",
    text: "Ahmad developed an Illegal Bowling Detection System for our sports analytics platform. Using YOLOv8 for pose estimation, he delivered a cutting-edge solution for real-time analysis of bowling actions. His attention to detail and ability to optimize video processing pipelines made the project a resounding success.",
    img: "./assets/images/avatar-4.png",
  },
};

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const id = this.dataset.id; // Retrieve the id from the data-id attribute
    const data = testimonialsData[id]; // Get data from testimonialsData

    modalImg.src = data.img;
    modalImg.alt = data.title;
    modalTitle.innerHTML = data.title;
    modalDate.innerHTML = new Date(data.date).toLocaleDateString();
    modalDate.setAttribute("datetime", data.date);
    modalText.innerHTML = `<p>${data.text}</p>`;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
