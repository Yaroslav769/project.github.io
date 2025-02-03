const url = "https://formcarry.com/s/s5AE4tEX-Xr";

function sendForm(event) {
    event.preventDefault();

    if (!document.querySelector("form").reportValidity()) {
        return;
    }

    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");

    const data = {};
    const fields = document.querySelectorAll(".form-control:not(.form-label)");

    fields.forEach((field) => {
        data[field.name] = field.value;
    });

    request.send(JSON.stringify(data));

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                alert("Successful");
                fields.forEach((field) => {
                    field.value = "";
                });
                window.localStorage.clear();
            } else {
                alert("Something was wrong...");
            }
        }
    };
}

function saveItem(event) {
    window.localStorage.setItem(event.target.name, event.target.value);
}

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("change", saveItem);

    Object.keys(window.localStorage).forEach((name) => {
        const input = document.querySelector(`[name=${name}]`);
        if (input) {
            input.value = window.localStorage.getItem(name);
        }
    });

    form.addEventListener("submit", sendForm);
});
