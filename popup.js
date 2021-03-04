console.log("extension enabled");


function init()

function storeLanguageLocally(lang) {
  langArray = fs.readFileSync( lang + '.txt').toString().replace('/\t', '').split("\n ");
  langArray.forEach( entry => {
    var ogWord = entry.split(" ")[1];
    var englishWord = entry.split(" ")[2];
    localStorage.setItem(ogWord, englishWord);
   });
}

function

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
