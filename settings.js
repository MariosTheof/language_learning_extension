$(".btn").click(
  function() {
    $(".home-panel").toggleClass( "active" );
    $(".settings-panel").toggleClass( "active" );
  });

var boxes = $('div.box');
boxes.click(function() {
    boxes.removeClass('selected');
    $(this).addClass("selected");
});


/* Database interactions */
var db; 


initDatabase();

async function initDatabase() {
  db = new Dexie("language_db");
  db.version(1).stores({
    words: 'name, meaning, correctAnswers, wrongAnswers'
  });
}

function addLanguage(lang) {
  if (lang == 'es') {
    let words = [];
    


  }

}

async function list() {

  db.words.put({name: "hola", shoeSize: 8}).then (function(){
    return db.words.get('Nicolas');
  }).then(function (word) {
      console.log ("Word stored :  " + word);
  }).catch(function(error) {
    console.log ("Ooops: " + error);
  });

  let words = await wordsStore.getAll();

  console.log(words);

  // if (books.length) {
  //   listElem.innerHTML = books.map(book => `<li>
  //       name: ${book.name}, price: ${book.price}
  //     </li>`).join('');
  // } else {
  //   listElem.innerHTML = '<li>No books yet. Please add books.</li>'
  // }
}










