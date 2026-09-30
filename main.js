const logregBox = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click" , function() {
    logregBox.classList.add("active");
});
loginLink.addEventListener("click" , function() {
    logregBox.classList.remove("active");
});
