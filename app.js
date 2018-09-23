// jQuery to Make All JS Wait to Run Until After Page Loads
$(document).ready(function() {
  // console.log("Page loaded");

  //////////////////////////////////////////
  // READ JOKES FROM FIREBASE DTABASE
  /////////////////////////////////////////

  // Reference Firebase
  var jokesRef = firebase.database().ref("jokes/");
  // Get Data from Firebase
  jokesRef.on("child_added", function(data, prevChildKey) {
    var joke = data.val();
    //console.log("Joke: " + joke.output, "Previous Child: " + prevChildKey);

    //////////////////////////////////////////
    // BUILD ROWS AFTER READING FIREBASE DATABASE
    /////////////////////////////////////////

    // Function to Append Jokes to Onscreen List
    function addJoke() {
      const list = document.getElementById("jokes");
      const row = document.createElement("tr");

      // Builds Rows
      row.innerHTML = `<td>${
        joke.output
      }</td><td><a href="#" class="delete">X</a><button class="button-primary" id="delete-btn">Button element</button></td>`;
      list.appendChild(row);
    }

    // Run Function
    addJoke();
  });

  //////////////////////////////////////////
  // NEW JOKE BUTTON & ACTION
  /////////////////////////////////////////

  // Get Button Element and Register EventListener
  document.getElementById("buton1").addEventListener("click", eventHandler);

  // Function to Load joke from API and display it
  function eventHandler(e) {
    //////////////////////////////////////////
    // SELECT NUMBER OF JOKES FIELD & ACTION
    /////////////////////////////////////////

    // Capture User Number Input Value and Assign to Variable
    let numberOfJokes = document.getElementById("number").value;

    // Building URL Which Includes numberofJokes Variable
    let URL = "http://api.icndb.com/jokes/random" + "/" + numberOfJokes;
    console.log(URL);

    // HTTP GET call to API to Retrieve JSON
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

        // FOR LOOP to Interate Through Parsed Array
        for (i = 0; i < parsedJoke.value.length; i++) {
          // Declare Let and Assign Indexed Value of Jokevalue of the joke text
          let joke = parsedJoke.value[i].joke;
          //console.log(joke);

          // Declare Let and Assign it value of "joke"
          let output = joke;

          //////////////////////////////////////////
          // PUSH JOKES TO FIREBASE
          /////////////////////////////////////////

          // Reference Firebase
          var jokesRef = firebase.database().ref("jokes/");

          // Push Data to FireBase
          jokesRef.push({
            output: output
          });
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
 */
  //////////////////////////////////////////
  // NEW PERSONLIZED JOKE BUTTON & ACTION
  /////////////////////////////////////////

  // Get Button Element and Register EventListener
  document.getElementById("buton2").addEventListener("click", eventHandler);

  // Function to Load joke from API and display it
  function eventHandler(e) {
    //////////////////////////////////////////
    // SELECT NUMBER OF PERSONALIZED JOKES FIELD & ACTION
    /////////////////////////////////////////

    // Capture User Number Input Value and Assign to Variable
    let numberOfJokes = document.getElementById("number").value;

    John = "Billy";
    Doe = "B";

    // Building URL to include the user input variable from above
    let URL2 =
      "http://api.icndb.com/jokes/random/" +
      numberOfJokes +
      "?firstName=" +
      John +
      "&amp;lastName=" +
      Doe;

    console.log(URL2);

    // HTTP GET call to API to Retrieve JSON
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL2, true);
    //console.log("Button Pressed");

    // Function to GET, PARSE, and DISPLAY joke value
    xhr.onload = function() {
      if (this.status === 200) {
        console.log("GET was got");
        console.log(this.responseText);

        // Parse JSON object
        let parsedJoke = JSON.parse(this.responseText);
        console.log(parsedJoke);

        // FOR LOOP to Interate Through Parsed Array
        for (i = 0; i < parsedJoke.value.length; i++) {
          // Declare Let and Assign Indexed Value of Jokevalue of the joke text
          let joke = parsedJoke.value[i].joke;
          console.log(joke);

          // Declare Let and Assign it value of "joke"
          let output = joke;

          //////////////////////////////////////////
          // PUSH JOKES TO FIREBASE
          /////////////////////////////////////////

          // Reference Firebase
          var jokesRef = firebase.database().ref("jokes/");

          // Push Data to FireBase
          jokesRef.push({
            output: output
          });
        }
      }
    };

    xhr.send();

    e.preventDefault();
  }
});
