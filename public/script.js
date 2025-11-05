const noteForm = document.getElementById("formNote");
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");

console.log("Form found:", noteForm);
console.log("Title input:", noteTitle);
console.log("Content input:", noteContent);

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = noteTitle.value;
  const content = noteContent.value;

  console.log("Form submitted!", { title, content });
  alert(`Note would be created with:\nTitle: ${title}\nContent: ${content}`);

  noteForm.reset();
});
