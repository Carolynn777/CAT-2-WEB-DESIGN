function calculatePay() {
    // Prompt the user to enter employee details
    const employeeName = prompt("Enter employee name:");
    const hoursWorked = parseFloat(prompt("Enter hours worked:"));
    const ratePerHour = parseFloat(prompt("Enter rate per hour:"));

    // Calculate the basic pay
    const basicPay = hoursWorked * ratePerHour;

    // Calculate tax based on basic pay
    let tax;
    if (basicPay > 50000) {
        tax = basicPay * 0.20;
    } else if (basicPay >= 20000 && basicPay <= 50000) {
        tax = basicPay * 0.10;
    } else {
        tax = 0;
    }

    // Calculate the net pay
    const netPay = basicPay - tax;

    // Display the results
    alert(`Employee Name: ${employeeName}\nBasic Pay: $${basicPay.toFixed(2)}\nTax: $${tax.toFixed(2)}\nNet Pay: $${netPay.toFixed(2)}`);
}
