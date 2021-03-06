console.log("extension enabled");

function init() {

}

function storeLanguageLocally(lang) {
  langArray = fs.readFileSync( lang + '.txt').toString().replace('/\t', '').split("\n ");
  langArray.forEach( entry => {
    var ogWord = entry.split(" ")[1];
    var englishWord = entry.split(" ")[2];
    localStorage.setItem(ogWord, englishWord);
   });
}

// 1.choose languages -- add to language array
languages = ['es', 'el'];

// 2. store languages to local storage
selectedLanguages.forEach( lang => {
  switch(lang) {
    case "es":
      //store spanish
      storeLanguageLocally("es");
      break;
    case "el":
      //store greek
      storeLanguageLocally("el");
    default:
      break;
  }
});
// 3. set popup timer

// 4. start popping
const popupHTML = `
<div id="popup">
    <h1 style="float:right">Hola!</h1>
      <img width="76" height="76" src="./spain.svg" style="position: relative;z-index: 100;">
    <p>What's the word for <b>XY</b> in target Language? </p>
    <input type="text" placeholder="Answer"></input>
    <a href="#" id="button">Submit &raquo;</a>
</div>
        `

function showPopup() {
  var popupDiv = document.createElement("div");
  popupDiv.innerHTML = popupHTML;
  document.body.appendChild(popupDiv);
}
