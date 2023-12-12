// de default colorMode opzoeken
// dat is value van de checked radio button in de html
var colorMode = document.querySelector("header nav input:checked").value;

// de default systeem voorkeuren bepalen
// true of false
var systemLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

// de radio buttons
const colorModeInputs = document.querySelectorAll("header nav [type='radio']");





/********************************/
/* bij het openen van de pagina */
/********************************/

// als de colorMode opgeslagen is in localstorage
// de radio buttons en :root initialiseren op basis van de opgeslagen colorMode
if( localStorage.getItem("colorMode") ) {
  // de colorMode ophalen
  colorMode = JSON.parse(localStorage.getItem("colorMode"));
  
  // de bijbehorende radio button opzoeken en aanzetten
  let selectedRadioButton = document.querySelector("#"+colorMode);
  selectedRadioButton.checked = true;
  
  // :root updaten
  updateColorModeOnRoot();
}





/**********************************************/
/* als een van de radio buttons wordt gekozen */
/**********************************************/
colorModeInputs.forEach(colorModeInput => {
  colorModeInput.addEventListener('change', radioChecked);  
});

function radioChecked() {
  // de gekozen optie bepalen
  let checkedColorMode = this.value; 
  
  // de gekozen optie opslaan in localstorage
  localStorage.setItem("colorMode", JSON.stringify(checkedColorMode));
  
  // global var setten
  colorMode = checkedColorMode;
  
  // :root updaten
  updateColorModeOnRoot();
  applyChristmasStylesToButtons();

  // Update snowflakes based on the selected color mode
  var snowFlakes = document.querySelector("header nav #snow-bg");
  // var penguin = document.querySelector("#penguin");

  

  // Geholpen door ChatGPT met dit gedeelte, omdat ik er niet achter kwam waar ik de functie zou moeten callen
  if (colorMode === "christmas-mode") {
    snowFlakes.classList.add("inBeeld");
    applyChristmasStylesToButtons();
    updateSharkImage();
  } else {
    snowFlakes.classList.remove("inBeeld");
    updateSharkImage(); // zodat de afbeelding ook bij andere color modes terug verandert
  }
}





/******************************************************************/
/* als de system prefers-color-scheme of prefers-contrast wijzigt */
/******************************************************************/
window.matchMedia("(prefers-color-scheme: light)").addEventListener('change', (event) => {
  // de nieuwe waarde opslaan
  systemLightMode = event.matches; // true or false
  // :root updaten
  updateColorModeOnRoot();
});


/****************************************/
/* data-color-mode van de :root updaten */
/****************************************/

var snowFlakes = document.querySelector("header nav #snow-bg");

function updateColorModeOnRoot() {
    // als licht of dark gekozen is
    if (colorMode == "light-mode" || colorMode == "dark-mode" || colorMode == "christmas-mode") {
      document.documentElement.dataset.colorMode = colorMode;
    }
    // als system is gekozen
    // bepalen welke system optie relevant is
    else {
      // als light mode is gekozen
      if (colorMode == "christmas-mode") {
        document.documentElement.dataset.colorMode = "christmas-mode";
        console.log("heyyyyyy!");
      }
      else if (systemLightMode) {
        document.documentElement.dataset.colorMode = "light-mode";
      }
      // anders blijft dark mode over
      else {
        document.documentElement.dataset.colorMode = "dark-mode";
      }
    }
}


function updateSharkImage() {
  var sharkImage = document.querySelector('.shark > img');
  if (!sharkImage) {
    console.error("Error: Shark image element not found.");
    return;
  }

  var colorMode = document.documentElement.dataset.colorMode;

  if (colorMode === "christmas-mode") {
    sharkImage.src = "./images/whiteshark_christmas.webp";
  } else {
    sharkImage.src = "./images/whiteshark.svg";
  }

  console.log("Updated shark image:", sharkImage.src);
}


// function applyChristmasStylesToButtons() {
//   const buttons = document.querySelectorAll('main a.button');

//   // loopt door elke button om de styling toe te voegen
//   buttons.forEach(button => {
//       button.classList.add('christmas-button');
//   });


function applyChristmasStylesToButtons() {
  const buttons = document.querySelectorAll('main a.button');

  // verwijder christmas-mode van buttons
  buttons.forEach(button => {
      button.classList.remove('christmas-button');
  });

  // alleen als de mode christmas-mode is, voeg de classlist toe
  if (colorMode === "christmas-mode") {
      buttons.forEach(button => {
          button.classList.add('christmas-button');
      });
  }
}

