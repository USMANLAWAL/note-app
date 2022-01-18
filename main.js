const notesContainer= document.getElementById("App");
const addNotesButton= notesContainer.querySelector(".add-note");

function getNotes() {
 return JSON.parse(localStorage.getItem("sticky-notes") || "[]" )
}

function saveNotes(notes) {
localStorage.getItem("sticky-notes" JSON.stickyfy (notes));
}

function createNoteElements(id, content) {
const element= document.createElement("textarea");

element.classList.add("notes");
element.value= content;
element.placeholder= "Empty sticky notes";

element.addEventListener("change", () =>{
  updateNotes(id, element.value);
});

return element;
}

function addNotes(id, newContent) {

}

function updateNotes() {

}

function deleteNote() {

}