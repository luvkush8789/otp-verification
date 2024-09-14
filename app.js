let input = Array.from(document.querySelectorAll('input'));
let btn = document.querySelector("button");

function checkInputs() {
    let allFilled = input.every(element => element.value.trim() !== "");
    btn.disabled = !allFilled;
}

input.forEach((element, index) => {
    element.addEventListener('keyup', () => {
        if (index + 1 < input.length) {
            input[index + 1].focus(); // Move to the next input on keyup
        }

        checkInputs();
    });
});

checkInputs();

btn.addEventListener('click', function () {
    alert("Verify Complited")

    input.forEach(element=> {
        element.value = "";
    });

    checkInputs();
});
