const para = document.querySelector(".para");
let expression = "";

document.querySelectorAll('.styl').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;

        if (buttonText === 'AC') {
            expression = "";
        } else if (buttonText === '=') {
            try {
                let result = eval(expression);
                // Check if the result is a number and if it has decimal places
                if (!isNaN(result) && result % 1 !== 0) {
                    // If it has decimal places, limit to 2 decimal places
                    expression = result.toFixed(2);
                } else {
                    // If it's an integer, display as it is
                    expression = result.toString();
                }
            } catch (error) {
                expression = "Error";
            }
        } else {
            expression += buttonText;
        }

        para.textContent = expression;
    });
});
