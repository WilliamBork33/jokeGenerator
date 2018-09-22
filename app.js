//////////////////////////////////////////
// GET JOKE BUTTON
/////////////////////////////////////////

// Getting button element and registering EventListener
document.getElementById("buton1").addEventListener("click", eventHandler);

// Function to load joke from API and display it
function eventHandler(e) {
  //////////////////////////////////////////
  // SELECT NUMBER OF JOKES BUTTON
  /////////////////////////////////////////

  // Capture value user inputs in field and assign to a variable
  let numberOfJokes = document.getElementById("number").value;
  console.log(numberOfJokes);

  // Building URL to include the user input variable from above
  let URL = "http://api.icndb.com/jokes/random" + "/" + numberOfJokes;
  console.log(URL);

  // Making GET call to API to retrieve JSON
  const xhr = new XMLHttpRequest();
  xhr.open("GET", URL, true);
  //console.log("Button Pressed");

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

  xhr.send();

  e.preventDefault();
}

/*
Projecto: Modificar el acceso al API de ChuckNorris para aceptar Nombre y Apellido
y generar chistes con el nombre y apellido indicados
Adicionalmente usar Materialize CSS
y, que se pongan creativos con la pagina



?firstName=

?lastName=

	
http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe

*/
/* 
// Function to load joke from API and display it
function eventHandler(e) {
  //////////////////////////////////////////
  // TEST
  /////////////////////////////////////////

  // Capture value user inputs in field and assign to a variable
  let numberOfJokes = document.getElementById("number").value;
  console.log(numberOfJokes);

  John = "Billy";
  Doe = "B";

  // Building URL to include the user input variable from above
  let URL2 =
    //http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe

    "http://api.icndb.com/jokes/random?firstName=" +
    John +
    "&amp;lastName=" +
    Doe +
    "/" +
    numberOfJokes;
  //console.log(URL2);

  // Making GET call to API to retrieve JSON
  const xhr = new XMLHttpRequest();
  xhr.open("GET", URL2, true);
  //console.log("Button Pressed");

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
        console.log(parsedJoke.value[i]);

        // Declare let and assign it value of the joke text
        let joke = parsedJoke.value[i].joke;
        console.log(joke);

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

  xhr.send();

  e.preventDefault();
}
 */
