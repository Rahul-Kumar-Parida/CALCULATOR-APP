const para = document.querySelector(".para");
let expression = "";

document.querySelectorAll('.styl').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;

        if (buttonText === 'AC') {
            expression = "";
        } else if (buttonText === '=') {
            try {
                expression = eval(expression).toString();
            } catch (error) {
                expression = "Error";
            }
        } else {
            expression += buttonText;
        }

        para.textContent = expression;
    });
});
