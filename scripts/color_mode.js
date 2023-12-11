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

  // Update snowflakes based on the selected color mode
  var snowFlakes = document.querySelector("header nav #snow-bg");
  var penguin = document.querySelector("#penguin");

  // Geholpen door ChatGPT met dit gedeelte, omdat ik er niet achter kwam waar ik de functie zou moeten callen
  if (colorMode === "christmas-mode") {
    snowFlakes.classList.add("inBeeld");
    penguin.classList.add("inBeeld");
  } else {
    penguin.classList.remove("inBeeld");
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


