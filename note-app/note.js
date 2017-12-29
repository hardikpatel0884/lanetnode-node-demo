// adding require object's
const fs=require("fs");

/**
 * adding new notes
 * @param {String} title title of note 
 * @param {String} body body of note
 */
const addNote=(title,body)=>{
    var notes= fetchNotes();
    var note={
        title,
        body
    }
    var dublicateNote=notes.filter(note => note.title === title)
    if(dublicateNote.length===0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
}

/**
 * get all notes
 */
const getAllNote=()=>{
    var notes=fetchNotes();
    notes.length>0?notes.forEach(note=>showNotes(note)):console.log("No notes found");
}

/**
 * get single note
 * @param {String}title title of the note
 */
const getNote=(title)=>{
    var notes=fetchNotes();
    var show=notes.filter(note=>note.title===title);
    show.length>0?show.forEach(note=>showNotes(note)):console.log(`No Notes found with ${title} Title`);
}

/**
 * removing note/notes from list
 * @param {String} title title of notes 
 */
const removeNote=(title)=>{
    var notes= fetchNotes();
    var newNotes=notes.filter(note => note.title !== title)
    saveNote(newNotes);
    return notes.length!=newNotes.length;
}

/**
 * fetching notes data
 * @returns {Array} null or notes data
 */
const fetchNotes=()=>{
    try{
        return JSON.parse(fs.readFileSync('notes-data.json'));
    }catch(e){
        return[];
    }
}

/**
 * saving notes
 * @param {Array} notes notes
 */
const saveNote=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}

/**
 * displayin notes
 * @param {Object} notes sigle object of notes
 */
const showNotes=(notes)=>{
    console.log(`  ------------------
    Title: ${notes.title}
    Body: ${notes.body}`);
}


// exporting modules
module.exports={
    addNote,
    getAllNote,
    getNote,
    removeNote
}