const noteForm = document.getElementById("formNote");
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");

// console.log("Form found:", noteForm);
// console.log("Title input:", noteTitle);
// console.log("Content input:", noteContent);

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
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });

    if (response.ok) {
      const newNote = await response.json();
      console.log("Note created successfully!");
      alert("Note created successfully!");

      noteForm.reset();
    } else {
      const errorData = await response.json();
      alert("Error:", errorData.error);
    }
  } catch (error) {
    console.error("Failed to created note:", error);
    alert("Failed to create note. Is the server running?");
  }
});
