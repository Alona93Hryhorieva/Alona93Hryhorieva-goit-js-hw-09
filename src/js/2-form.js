let formData = { email: "", message: "" };
const formFeed = document.querySelector(".feedback-form") ;
const emailInput = document.querySelector(".email");
const messageInput = document.querySelector(".message");
const btnInput = document.querySelector(".submit");

// Перевірка локального сховища при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    const savedFormData = localStorage.getItem("feedback-form-state");
    if (savedFormData) {
        const parsedFormData = JSON.parse(savedFormData);
        formData.email = parsedFormData.email;
        formData.message = parsedFormData.message;
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
});

// Відстеження змін у формі через подію input
emailInput.addEventListener("input", (event) => {
    formData.email = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

messageInput.addEventListener("input", (event) => {
    formData.message = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

// Валідація перед відправленням форми
formFeed.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        messageInput.value = "";
        emailInput.value = "";
    }
});


