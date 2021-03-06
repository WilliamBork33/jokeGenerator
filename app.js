// jQuery to Make All JS Wait to Run Until After Page Loads
$(document).ready(function() {
  //console.log("Page loaded");

  //////////////////////////////////////////
  // PRE-LOADING API EFFECT
  /////////////////////////////////////////

  $(document).ready(function() {
    $(".preloader-wrapper").css("display", "none");
  });

  //////////////////////////////////////////
  // READ JOKES FROM FIREBASE DATABASE
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
      }</td><td><button class="delete-one" id="buton-delete-one">Delete</button></td>`;
      list.appendChild(row);
    }

    // Run Function
    addJoke();
  });

  //////////////////////////////////////////
  // NEW JOKE BUTTON & ACTION
  /////////////////////////////////////////

  // Get Button Element and Register EventListener
  document
    .getElementById("buton1")
    .addEventListener("click", eventHandlerStandardJoke);

  // Function to GET Joke from API and Display It
  function eventHandlerStandardJoke(e) {
    //////////////////////////////////////////
    // GRAB VALUE IN NUMBER OF JOKES FIELD / BUILD URL / HTTP GET REQUEST
    /////////////////////////////////////////

    //////////////////////////////////////////
    // DISPLAY /HIDE LOADING EFFECT
    /////////////////////////////////////////

    // Show Loading Effect
    $(document).ready(function() {
      $(".preloader-wrapper").show();
    });

    // Remove Loading Effect
    setTimeout(function() {
      $(".preloader-wrapper").remove();
    }, 2000);

    // Capture User Number Input Value and Assign to Variable
    let numberOfJokes = document.getElementById("number").value;

    // Building URL Which Includes numberofJokes Variable
    let URL = "https://api.icndb.com/jokes/random" + "/" + numberOfJokes;
    //console.log(URL);

    // HTTP GET call to API to Retrieve JSON
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL, true);

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
          // Declare Let and Assign Indexed Value of Value of the Joke
          let joke = parsedJoke.value[i].joke;
          //console.log(joke);

          // Declare Let and Assign it Value of "joke"
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

  //////////////////////////////////////////
  // NEW PERSONLIZED JOKE BUTTON & ACTION
  /////////////////////////////////////////

  // Get Button Element and Register EventListener
  document
    .getElementById("buton2")
    .addEventListener("click", eventHandlerPersonalizedJoke);

  // Function to GET Joke from API and Display It
  function eventHandlerPersonalizedJoke(e) {
    //////////////////////////////////////////
    // GRAB VALUE IN NUMBER OF PERSONALIZED JOKES FIELD / BUILD URL / HTTP GET REQUEST
    /////////////////////////////////////////

    //////////////////////////////////////////
    // DISPLAY / HIDE LOADING EFFECT
    /////////////////////////////////////////

    // Show Loading Effect
    $(document).ready(function() {
      $(".preloader-wrapper").show();
    });

    // Remove Loading Effect
    setTimeout(function() {
      $(".preloader-wrapper").remove();
    }, 2000);

    // Capture User Number Input Value and Assign to Variable
    let numberOfJokes = document.getElementById("number").value;

    John = document.getElementById("first-name").value;
    //console.log(John);
    Doe = document.getElementById("last-name").value;
    //console.log(Doe);

    // Building URL to Include User Input Variable
    let URL2 =
      "https://api.icndb.com/jokes/random/" +
      numberOfJokes +
      "?firstName=" +
      John +
      "&amp;lastName=" +
      Doe;

    //console.log(URL2);

    // HTTP GET call to API to Retrieve JSON
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL2, true);

    // Function to GET, PARSE, and DISPLAY Joke Value
    xhr.onload = function() {
      if (this.status === 200) {
        //console.log("GET was got");
        //console.log(this.responseText);

        // Parse JSON Object
        let parsedJoke = JSON.parse(this.responseText);
        //console.log(parsedJoke);

        // FOR LOOP to Interate Through Parsed Array
        for (i = 0; i < parsedJoke.value.length; i++) {
          // Declare Let and Assign Indexed Value of Value of the Joke
          let joke = parsedJoke.value[i].joke;
          //console.log(joke);

          // Declare Let and Assign it Value of "joke"
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

//////////////////////////////
//DELETE ONE JOKE
////////////////////////////////

// TO FIX

/* 
//Declare Const & Assign Delete Button
const deleteOne = document.querySelector(".delete-one");

//Register EventListener
deleteOne.addEventListenerDeleteOne("click", function() {
  let toDelete = document.querySelectorAll("td");

  //Loop through array to delete all data
  toDelete.forEach(function(element) {
    element.remove();
    console.log("Delete One");

    //////////////////////////////////////////
    // DELETE ONE JOKE FROM FIREBASE
    /////////////////////////////////////////

    // Reference Firebase
    var jokesRef = firebase.database().ref("jokes/");

    // Delete All Data From FireBase
    jokesRef.remove();
  });
});
 */
//////////////////////////////
//DELETE ALL JOKES
////////////////////////////////

//Declare Const & Assign Delete Button
const deleteAll = document.querySelector(".delete-all");

//Register EventListener
deleteAll.addEventListener("click", function() {
  let toDelete = document.querySelectorAll("td");

  //Loop through array to delete all data
  toDelete.forEach(function(element) {
    element.remove();

    //////////////////////////////////////////
    // DELETE ALL JOKES FROM FIREBASE
    /////////////////////////////////////////

    // Reference Firebase
    var jokesRef = firebase.database().ref("jokes/");

    // Delete All Data From FireBase
    jokesRef.remove();
  });
});
