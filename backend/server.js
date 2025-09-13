const mongoose = require("mongoose");
const express = require("express");
const  app  = express();
const port = 5000;
const Note = require("./schem.js");
const cors = require('cors')
const bodyParser = require("body-parser");
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/noteDatabase").then(()=>{
    console.log("mongodb connected ...");
}).catch(err => console.log("Error during mongdodb connection"))


app.get("/api/notes", async (req,res)=>{
    // res.send(" hey from there ")
  try {
      
      const allNotes = await Note.find();
      if(!allNotes){
        return res.json({message:"No Notes were found "});
      }
      console.log('All notes are : ',allNotes)
      res.json({message: "All notes found", notes:allNotes});
    } catch(err){
        res.status(500).json({message:"Internal server error"})
    }
  


})

app.post("/api/notes", async (req,res)=>{
    const { title , description} = req.body;
    
    if ( !title || !description) {
       return  res.json({message:"both title and descriptions are required "});
    }

    const newNote = {
        title,
        description
    }
    // we can also creat new note like this  
    const noteAdded = await  new Note(newNote);
    await noteAdded.save();
    res.json({message :" Note added successfully", noteAdded});
})

app.delete("/api/notes/:id",async ( req,res )=>{
    const {id} = req.params;

    const notefind = await Note.findByIdAndDelete(id);
    res.json({message:"Note deleted by this ID  ",notefind});
} )


app.listen(port,()=>{
    console.log(`server is listening on the port ${port}`)
})