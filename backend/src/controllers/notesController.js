import Note from "../models/Note.js"
export const getAllNotes = async(req, res) => {
  try{
    const notes=await Note.find().sort({createdAt:-1})
    res.status(200).json(notes);
  }catch(error){
  console.error("error in note getting", error )
    res.status(500).json({message:"Internal server error"})
  }
};
export const getNoteById = async(req, res) => {
  try{
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note){
      return res.status(404).json({message: 'note not found'})
    }
    res.status(200).json(note);
  }
  catch(error){
    console.error("error in note getting", error)
    res.status(500).json({message:"Internal server error"})
  }
};
export const createNote = async(req, res) => {
  try{  
    const {title,content}=req.body
    const newNote=new Note({title: title,content: content })

    const savedNote= await newNote.save();
    res.status(201).json(savedNote);
  }
  catch(error){
  console.error("error in note creation", error )
    res.status(500).json({message:"Internal server error"})
  }


};

export const updateNote = async(req, res) => {
  try{
    const { id } = req.params;
    const {title,content}=req.body;
    const updatedNote=await Note.findByIdAndUpdate(id,{title,content},{new:true});
    if (!updatedNote){
      return res.status(404).json({message: 'no note is found'})
    }
    res.status(200).json(updatedNote ); 
  }
  catch(error){
  console.error("error in note update", error )
    res.status(500).json({message:"Internal server error"})
  }
};

export const deleteNote = async(req, res) => {
try{
    const { id } = req.params;
    const {title,content}=req.body;
    const deletedNote=await Note.findByIdAndDelete(id);
    if (!deletedNote){
      return res.status(404).json({message: 'no note is found'})
    }
    res.status(200).json(deletedNote ); 
  }
  catch(error){
  console.error("error in note deletion", error )
    res.status(500).json({message:"Internal server error"})
  }
};