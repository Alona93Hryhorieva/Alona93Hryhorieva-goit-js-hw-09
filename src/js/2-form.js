// const formData = { email: "", message: "" };
// const formFeed = document.querySelector(".feedback-form") ;
// const emailInput = document.querySelector(".email");
// const messageInput = document.querySelector(".message");
// const btnInput = document.querySelector(".submit");


// document.addEventListener("DOMContentLoaded", () => {
//     const savedFormData = localStorage.getItem("feedback-form-state");
//     if (savedFormData) {
//         const parsedFormData = JSON.parse(savedFormData);
//         formData.email = parsedFormData.email;
//         formData.message = parsedFormData.message;
//         emailInput.value = formData.email;
//         messageInput.value = formData.message;
//     }
// });

// emailInput.addEventListener("input", (event) => {
//     formData.email = event.target.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// });

// messageInput.addEventListener("input", (event) => {
//     formData.message = event.target.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// });


// btnInput.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (formData.email === "" || formData.message === "") {
//         alert("Fill please all fields");
//     } else {
//         console.log(formData);
//         localStorage.removeItem("feedback-form-state");
//         formData.email = "";
//         formData.message = "";
//         emailInput.value = "";
//         messageInput.value = "";
//     }
// });

// // Оголошення об’єкту formData з початковими значеннями
// const formData = { email: "", message: "" };

// // Перевірка локального сховища при завантаженні сторінки
// document.addEventListener("DOMContentLoaded", () => {
//     const savedFormData = localStorage.getItem("feedback-form-state");
//     if (savedFormData) {
//         const parsedFormData = JSON.parse(savedFormData);
//         formData.email = parsedFormData.email;
//         formData.message = parsedFormData.message;
//         document.querySelector(".email").value = formData.email;
//         document.querySelector(".message").value = formData.message;
//     }
// });

// // Відстеження змін у формі через подію input
// document.querySelector(".email").addEventListener("input", (e) => {
//     formData.email = e.target.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// });

// document.querySelector(".message").addEventListener("input", (e) => {
//     formData.message = e.target.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// });

// // Валідація перед відправленням форми
// document.querySelector("form").addEventListener("submit", (event) => {
//     event.preventDefault();

//     // Перевірка на заповненість полів
//     if (formData.email === "" || formData.message === "") {
//         alert("Fill please all fields");
//     } else {
//         console.log(formData);
//         localStorage.removeItem("feedback-form-state");
//         formData.email = "";
//         formData.message = "";
//         document.querySelector(".email").value = "";
//         document.querySelector(".message").value = "";
//     }
// });



const formData = {
    email: "",
    message: ""
};

document.querySelector(".feedback-form").addEventListener("input", function(event) {
    if (event.target.matches(".email")) {
        formData.email = event.target.value;
    } else if (event.target.matches(".message")) {
        formData.message = event.target.value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

window.addEventListener("DOMContentLoaded", function() {
    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (savedFormData) {
        document.querySelector(".email").value = savedFormData.email;
        document.querySelector(".message").value = savedFormData.message;
        formData.email = savedFormData.email;
        formData.message = savedFormData.message;
    }
});

document.querySelector(".submit").addEventListener("click", function() {
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        document.querySelector(".email").value = "";
        document.querySelector(".message").value = "";
    }
});


// Оголошення об'єкту formData з початковими значеннями
let formData = { email: "", message: "" };

// Перевірка та заповнення вмісту з локального сховища при загрузці сторінки
document.addEventListener('DOMContentLoaded', function() {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        formData = JSON.parse(savedData);
        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
    }
});

// Збереження введених даних в локальне сховище при введенні у форму
document.querySelector('form').addEventListener('input', function(e) {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

// Валідація форми при сабміті
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData = { email: "", message: "" };
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('textarea[name="message"]').value = "";
    }
});