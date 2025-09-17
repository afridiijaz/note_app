note_app


```
README.md
```

Paste this inside:

```markdown
# 📝 Notes App (MERN Stack)

A simple Notes Application built using **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB (database)**.  
This app allows users to create, view, and delete notes easily.

---

## 🚀 Features
- Create new notes with **title** and **description**
- View all saved notes
- Delete notes by ID
- Error handling and loading states
- Responsive frontend with React

---

## 🛠️ Tech Stack
- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **Others:** CORS, Body-Parser

---

## 📂 Project Structure
```

project-root/
│
├── backend/               # Express + MongoDB API
│   ├── schem.js           # Mongoose schema
│   ├── server.js          # Express server
│
├── frontend/              # React app
│   ├── src/
│   │   ├── Show\.js        # React component to display and manage notes
│   │   ├── Show\.css       # Styles for notes UI
│   │   └── App.js
│
├── .gitignore
├── README.md

````

---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/afridiijaz/note_app.git
cd note_app
````

### 2. Setup Backend

```bash
cd backend
npm install
node server.js
```

Runs at **[http://localhost:5000](http://localhost:5000)**

### 3. Setup Frontend

```bash
cd frontend
npm install
npm start
```

Runs at **[http://localhost:3000](http://localhost:3000)**

---

## 📡 API Endpoints

### Get all notes

```
GET /api/notes
```

### Add a new note

```
POST /api/notes
Body: { "title": "Note Title", "description": "Note description" }
```

### Delete a note

```
DELETE /api/notes/:id
```

---


## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

````

---

### Finally, commit and push it:
```bash
git add README.md
git commit -m "Added project documentation in README.md"
git push origin main
````

---

👉 Do you want me to also create a **`LICENSE` file** (MIT License) for your repo so that the "License" section in README points to an actual file?
