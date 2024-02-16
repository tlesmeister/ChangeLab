//JavaScript Code

function remainingChange() {
    let userInput = document.getElementById('tbChangeLab').value * 100;
    let quarters = Math.floor(userInput / 25);
    userInput = userInput % 25;
    let dimes = Math.floor(userInput / 10);
    userInput = userInput % 10;
    let nickels = Math.floor(userInput / 5);
    userInput = userInput % 5;
    let pennies = Math.round(userInput);

    let output = document.getElementById('changeLabOutput');
    output.textContent = " Quarters = " + quarters + " , " + " Dimes = " + dimes + " , " + " Nickels = " + nickels + " , " + " Pennies = " + pennies + " , ";
}
