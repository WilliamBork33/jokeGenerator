//http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe

firstName = "bb";
lastName = "last";

// Building URL to include the user input variable from above
let URL =
  "http://api.icndb.com/jokes/random?" + firstName + "&amp;" + "lastName";
console.log(URL2);

// Making GET call to API to retrieve JSON
const xhr = new XMLHttpRequest();
xhr.open("GET", URL, true);
console.log("Button Pressed");

// Function to GET, PARSE, and DISPLAY joke value
xhr.onload = function() {
  if (this.status === 200) {
    //console.log("GET was got");
    //console.log(this.responseText);

    // Parse JSON object
    let parsedJoke = JSON.parse(this.responseText);
    //console.log(parsedJoke);

    // FOR LOOP to interate through array and display jokes
    for (i = 0; i < parsedJoke.value.length; i++) {
      //console.log(parsedJoke.value[i]);

      // Declare let and assign it value of the joke text
      let joke = parsedJoke.value[i].joke;
      //console.log(joke);

      // Declare let and assign it value of "joke"
      let output = joke;

      // Function paint "outputs" to the screen
      function addJoke() {
        const list = document.getElementById("jokes");
        const row = document.createElement("tr");

        row.innerHTML = `
      <td>${output}</td>
      <td><a href="#" class="delete">X</a></td>`;
        list.appendChild(row);
      }

      // Run Function
      addJoke();
    }
  }
};

////////////////////////////WORKED ON IN BOOTCAMP TO NO SUCCESS////////

jokeArray = [];

//function saveLocally() {
let newJoke = 4;
console.log(newJoke);

jokeArray.push(newJoke);
console.log(jokeArray);

let newJoke2 = 99;
jokeArray.push(newJoke2);
// localStorage.setItem("jokes", jokeArray);
console.log(jokeArray);

jokeArray2 = [];

//let newJoke = 4;
let parsedJoke = `${this.responseText}`;
//console.log(parsedJoke.value.joke);

jokeArray2.push(parsedJoke);
console.log(jokeArray2);

let newJoke22 = `${this.responseText}`;
jokeArray2.push(newJoke22);
console.log(jokeArray2);

for (i = 0; i < jokeArray2.length; i++) {
  localStorage.setItem("jokes", jokeArray2[i]);
  console.log(jokeArray2);
}
