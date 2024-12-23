const readline = require('readline');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define an object with a value property
const myObject = {
  value: "Initial Value"
};

// Function to update the object's value
function updateValue(newValue) {
  myObject.value = newValue;
  console.log(`Updated value: ${myObject.value}`);
}

// Function to display the current value
function displayValue() {
  console.log(`Current value: ${myObject.value}`);
}

// Function to interact with the user
function interact() {
  displayValue();

  rl.question('Would you like to update the value? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      rl.question('Enter new value: ', (newValue) => {
        updateValue(newValue);
        interact(); // Continue interacting
      });
    } else if (answer.toLowerCase() === 'no') {
      console.log('Exiting...');
      rl.close(); // Close the readline interface
    } else {
      console.log('Invalid input. Please enter "yes" or "no".');
      interact(); // Retry interaction
    }
  });
}

// Start the interaction
interact();
