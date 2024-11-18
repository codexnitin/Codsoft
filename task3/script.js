// Get the display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
    if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Clear the display
document.getElementById('clear').addEventListener('click', () => {
    display.textContent = '0';
});

// Delete the last character
document.getElementById('delete').addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1) || '0';
});

// Evaluate the expression
document.getElementById('equals').addEventListener('click', () => {
    try {
        display.textContent = eval(display.textContent) || '0';
    } catch (error) {
        display.textContent = 'Error';
    }
});

// Add event listeners to all buttons with data-value attribute
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value) {
            updateDisplay(value);
        }
    });
});
