// Set up a DOMContentLoaded event listener


// Your code goes here
// Add an event listener for the 'DOMContentLoaded' event
// This event fires when the initial HTML document has been completely loaded 
document.addEventListener("DOMContentLoaded", () => {

    // Select the HTML element with the ID 'text'
    // The getElementById method returns a reference to the first object with the specified ID
    const changeText = document.getElementById("text");

    // Here, we are setting it to "This is really cool!"
    // Change the innerHTML property of the selected element
    changeText.innerHTML = "This is really cool!";
  });