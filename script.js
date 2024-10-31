// Select the form element with id 'tax-form'
const form = document.querySelector('#tax-form');

// Function to calculate income tax based on income brackets
function calculatorIncomeTax(income) {
    let tax = 0; // Initialize tax variable

    // Determine tax based on income range
    if (income <= 30000) {
        tax = 0; // No tax for income up to 30,000
    } else if (income > 30000 && income <= 60000) {
        tax = income * 0.05; // 5% tax for income between 30,001 and 60,000
    } else if (income > 60000 && income <= 90000) {
        tax = income * 0.10; // 10% tax for income between 60,001 and 90,000
    } else if (income > 90000 && income <= 120000) {
        tax = income * 0.15; // 15% tax for income between 90,001 and 120,000
    } else if (income > 120000 && income <= 150000) {
        tax = income * 0.20; // 20% tax for income between 120,001 and 150,000
    } else {
        tax = income * 0.30; // 30% tax for income over 150,000
    }

    return tax; // Return the calculated tax
}

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the income value from the form input and convert it to a number
    const income = Number(form.income.value);

    // Calculate the tax using the calculatorIncomeTax function
    const tax = calculatorIncomeTax(income);

    // Display the result in an alert
    alert(`The income tax of an income of ${income} is: ${tax}`);
});