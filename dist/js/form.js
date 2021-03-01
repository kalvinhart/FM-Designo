const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll(".contact__form-input");
const emailInput = document.querySelector(".contact__form-input[inputmode=email]");

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

inputs.forEach(input => {
    input.addEventListener("blur", (e) => {
        if (e.target.value) {
            input.classList.add("valid");
            input.classList.remove("error");
         } else {
            input.classList.remove("valid");
         }
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        input.classList.remove("error");
    });

    let errors = [];
    inputs.forEach((input, i) => {
        if (!input.value) {
            errors.push(i);
        }
    });

    if (!emailIsValid(emailInput.value)) errors.push(1);

    if (errors.length > 0) {
        errors.forEach(index => {
            inputs[index].classList.add("error");
        });
        errors.length = 0;
    } else {
        form.submit();
    }
});