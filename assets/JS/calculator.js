$(document).ready(function() {
    const $display = $('#display');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    $('.btn').click(function() {
        const value = $(this).data('value');

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            $display.val('');
        } else if (value === '=') {
            if (currentInput && previousInput) {
                try {
                    $display.val(eval(`${previousInput} ${operator} ${currentInput}`));
                    currentInput = $display.val();
                    previousInput = '';
                    operator = '';
                } catch (e) {
                    $display.val('Error');
                }
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
            $display.val(`${previousInput} ${operator} `);
        } else {
            currentInput += value;
            $display.val(currentInput);
        }
    });
});
