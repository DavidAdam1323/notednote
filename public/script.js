const noteForm = document.getElementById("formNote");
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const notesContainer = document.querySelector(".notes-container");

// console.log("Form found:", noteForm);
// console.log("Title input:", noteTitle);
// console.log("Content input:", noteContent);
// console.log("Display notes:", notesContainer)

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded - fetching notes...");

  loadNotes();
});

async function loadNotes() {
  try {
    console.log("Loading notes from server...");
    const response = await fetch("/data/notes");

    if (response.ok) {
      const notes = await response.json();
      console.log("Loaded notes:", notes);

      displayNotes(notes);
    } else {
      throw new Error("Server returned error");
    }
  } catch (error) {
    console.log("Failed to load notes:", error);
    notesContainer.innerHTML =
      "<p>Error loading notes. Please try again later.</p>";
  }
}

function displayNotes(notes) {
  if (notes.length === 0) {
    notesContainer.innerHTML =
      "<p>No notes yet. Please, create your first note!</p>";
    return;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char])
    );
  }

  let notesHTML = "";

  notes.forEach((note) => {
    notesHTML += `
    <div class="note-item">
      <h3>${escapeHTML(note.title)}</h3>
      <p>${escapeHTML(note.content)}</p>
      <div class="note-meta">
        <small>Created: ${new Date(note.createdAt).toLocaleString()}</small>
      </div>
      <div class="note-actions">
        <button class="edit-btn" onclick="">Edit</button>
        <button class="delete-btn" onclick="deleteNote('${note.id}')">Delete</button>
      </div>
    </div>
    `;
  });

  notesContainer.innerHTML = notesHTML;
}

noteForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();

  if (!title || !content) {
    alert("Please fill in both title and content!");
    return;
  }

  console.log("Creating note:", { title, content });

  try {
    const response = await fetch("/data/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      const newNote = await response.json();
      console.log("Note created successfully!");
      alert("Note created successfully!");

      noteForm.reset();
      loadNotes();

    } else {
      const errorData = await response.json();
      alert("Error:" + errorData.error);
    }
  } catch (error) {
    console.error("Failed to create note:", error);
    alert("Failed to create note. Is the server running?");
  }
});

// Function to delete note
async function deleteNote(noteId) {
  console.log(`Trying to delete ${noteId}`);

  const confirmed = confirm("Are you sure you want to delete this note?");
  if (!confirmed) {
    console.log("Delete cancelled by user");
    return;
  }

  try {
    const response = await fetch(`/data/notes/${noteId}`, { method: "DELETE" });

    if(response.ok) {
      const result = await response.json();
      console.log("Note deleted successfully:", result);
      alert("Note deleted successfully!");

      loadNotes();
    } else {
      const errorData = await response.json();
      alert("Error:" + errorData);
    }
  } catch (error) {
    console.error("Failed to delete note:", error);
    alert("Failed to delete note. Please try again.");
  }
}

window.deleteNote = deleteNote;
