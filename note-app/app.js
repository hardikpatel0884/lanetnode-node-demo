// requore files and object
const notes=require("./note.js");
const yargs=require("yargs");
const argv=yargs.argv;
const command=process.argv[2];

//get data from commnad

switch(command){
    case "add":
        notes.addNote(argv.title,argv.body)!=undefined?console.log("Note created Successfull..!!"):console.log("Note already there with this title...!!!");
    break;
    case "remove":
        notes.removeNote(argv.title)?console.log("Notes Deleted Successfully...!!!"):console.log("No notes found with this title...!!!");
    break;
    case "list":
        notes.getAllNote();
    break;
    case "get":
        notes.getNote(argv.title); 
    break;
    default:
        console.log("not commnad found");
    break;

}