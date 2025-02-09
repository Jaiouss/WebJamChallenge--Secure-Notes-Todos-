// Function to render notes
function renderNotes() {  
    notesList.innerHTML = ''; // Clear existing list items
    NoteKeeper.forEach(note => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${note.title}</strong><br>${note.body.slice(0, 50)}...`; // Show first 50 characters of content as a preview
      notesList.appendChild(li);
    });
  }

// function to save notes
function saveNote(){
  const noteId = crypto.randomUUID(); 
  const creationDate =  new Date();
  const noteTitle = document.getElementById("title").value;
  const noteBody = document.getElementById("body").value;
  const notes = {   //storing data in object
      id: noteId,
      createdAt: creationDate,
      title: noteTitle,
      body: noteBody
  }
  title.value = "";    
  body.value = "";   
  NoteKeeper.push(notes);   
  localStorage.setItem("NoteKeeper", JSON.stringify(NoteKeeper)); 
  renderNotes();
}

//function to delete a single note
function deleteNote(){
  if (confirm("delete all data!")){ 
  localStorage.removeItem(""); // spacific removal
  alert("Note deleted successfully.");
  window.location.reload(); // refresh the page
  }
}

//function to force clear all data
  function forceClearAllDAta(){ 
    if (confirm("delete all data!")){
        localStorage.clear();
    alert("Data Nuked successfully.");
    window.location.reload();
    }
}