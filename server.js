const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const dataFilePath = path.join(__dirname, "data.json");

// read data from the json file
const readNotes = () => {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON:", error);
    return [];
  }
};

// write data to the json file
const writeNotes = (notes) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(notes, null, 2));
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// GET notes
app.get("/data/notes", (req, res) => {
  try {
    const notes = readNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Failed to read notes." });
  }
});

// POST notes
app.post("/data/notes", (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({error: "Title and content are required"})
    }
    const notes = readNotes();

    const newNote = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    notes.push(newNote);
    writeNotes(notes);

    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Faild to create note" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
