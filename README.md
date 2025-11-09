# Note'd Note - Full Stack Note-Taking Application 📝

A simple and elegant full-stack note-taking application built with Node.js, Express, and vanilla JavaScript. The application provides a RESTful API for note operations: Create, read, update, and delete notes with a clean, responsive interface.

- **🌎 Live Demo** - [Click Here!](https://notednote.onrender.com/)

> _“Built as part of a full-stack development learning challenge during week 7 of my Step8up bootcamp.”_

## ☑️ How to Use

### Creating a Note
1. Fill in the "Note title" field
2. Add your content in the "Note content" area
3. Click "Save Note"
4. Your note will appear in the Notes section below

### Editing a Note
1. Click the "Edit" button on any note
2. The form will populate with the note's current content
3. Make your changes
4. Click "Update Note" to save changes

### Deleting a Note
1. Click the "Delete" button on any note
2. Confirm the deletion in the dialog box
3. The note will be permanently removed

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: JSON file system
- **Deployment**: Render.com
- **Package Management**: npm

## 📁 Project Structure

```
notes-app/
├── public/                # Frontend assets
│   ├── index.html         # Main HTML file
│   ├── styles.css         # CSS styling
│   └── script.js          # Frontend JavaScript
├── server.js              # Express server
├── data.json              # Notes data storage
├── package.json           # Project dependencies
└── .gitignore             # Git ignore file
```

## ℹ️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DavidAdam1323/notednote.git
   cd notednote
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Project Dependencies

- `express`: Web server framework
- `uuid`: Unique ID generation for notes

### Frontend Features
- **Clean UI**: Modern, responsive design
- **Form Validation**: Required field validation
- **Edit Mode**: Visual indication when editing
- **Confirmation Dialogs**: Safe delete operations
- **XSS Protection**: HTML escaping for security

### Backend Features
- **RESTful API**: Standard HTTP methods
- **Error Handling**: Comprehensive error responses
- **Data Persistence**: JSON file storage
- **CORS Ready**: Configured for web requests
<br />
<br />
---

### Let's connect!

>_*"Contributions are welcome!"*_

Beyond the code, I'm interesting in connect with fellow developers and innovators. Whether you want to share ideas, or just talk tech, connect with me on [**LinkedIn**](https://www.linkedin.com/in/davidadamsilva/).

