// get refs to the input and output elements in the page
const input = document.getElementById("target");
const output = document.querySelector("output");

// result will be an object with the keys valediction and target
// this function should replace the content of the <output> element in the page (to which we already have a reference, see above)
// with the result object's valediction and target formatted as "valediction, target". See example below.
// Example: if this function were called with a result object that has its target set to "Alligator" and its valediction
// set to "See you later", it should update the <output> element's content to be "See you later, Alligator"
function setOutput(result) {
  console.log("setOutput", result);
  // TODO Part 1 see comments just above 🙄
};


// when the input has focus and enter is pressed, invoke the function named later
input.addEventListener("keydown", (ev) => {
  console.debug("keydown", ev.key);
  if (ev.key === "Enter") {
    console.log("Enter detected. current value:", input.value);
    // TODO Part 1: use the provided later() function here
  }
});

