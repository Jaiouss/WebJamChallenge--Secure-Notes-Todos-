// DOM 
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const newBtn = document.getElementById("newBtn");
const settingsBtn = document.getElementById("settingsBtn");

// loading note from the local storage
let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || []; //getting or setting a mother array
  const notesList = document.querySelector('#notesList');
window.onload = renderNotes(); // notes will be randered in the preview after window loads

// button functiomalities
// save button
saveBtn.addEventListener('click', saveNote)

//force clear all DataBtn
deleteBtn.addEventListener('click', forceClearAllDAta)

settingsBtn






//    for( let i = 0; i < NoteKeeper.length; i++){
//    console.log(NoteKeeper(i));}

function no (){

}

