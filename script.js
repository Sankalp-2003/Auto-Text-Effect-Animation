const containerEl = document.querySelector('.container');

const array = ['Am Sankalp', 'Am A Web Developer', 'Create Websites', 'Am Interested in Front-End'];

let arrayIndex = 0;

let characters = 0
updateText()

function updateText(){
  characters++;
  containerEl.innerHTML = `<h1>I ${array[arrayIndex].slice(0,characters)}</h1>`;
  
  if(characters === array[arrayIndex].length){
    arrayIndex++
    characters = 0
  }
  if(arrayIndex === array.length){
    arrayIndex = 0;
  }
  setTimeout(updateText,200)
}