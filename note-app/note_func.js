import file from 'fs'
import chalk from 'chalk'

// standard function calling 
export const getNote=function(){
    return "data is returned";
}


// arrow function calling 
export const addNote=(title, body)=>{
    debugger
    
    const notes=loadNotes();
    const isDuplicate=notes.filter((note)=>{
        return note.title==title//return the object 
    })
    // console.log("isDupli"+isDuplicate)
    // [ { title: 'topic2', body: 'desc2' } ]
    if(isDuplicate==0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
    }else{
        console.log("Note is already here")
    }
}
export const removeNote=(title)=>{

   const notes =loadNotes();

   const newNote= notes.filter((note)=>{
        return note.title!=title
    })
    saveNotes(newNote);
    const newNoteData=loadNotes();
    // findNote(title);
    if(newNoteData.length>=notes.length){
        console.log(chalk.red("note not removed "));
    }else{
        console.log(chalk.green("note removed "));

    }
    
}
export const listNotes=()=>{
    const notes=loadNotes();
    console.log(chalk.yellow("Your note"))
    notes.map((note)=>{
       console.log(chalk.green(`Title :${note.title} , description:${note.body}`));
    }) 
}

export const readNote=(title)=>{
    const notes=loadNotes();
    const isDuplicate=notes.find((note)=>{
       return  note.title==title;

    })
    console.log(isDuplicate)
    if(isDuplicate){
        console.log(chalk.inverse("In the data"));
        
        console.log(chalk.green(`Title:${isDuplicate.title} , desc:${isDuplicate.body}`))
    }else{
        console.log(chalk.red("Not In the data "));
        
    }

}

// const findNote=function(title){
//     const noteData =loadNotes();

//     const isNote=noteData.find(function(note){
//         return note.title==title;
//     })
//     if(isNote=0){
//         console.log(chalk.red("note removed"));
//     }else{
//         console.log(chalk.red("note not removed"));
//     }
// }


function saveNotes(notes){
    const strData=JSON.stringify(notes);
    file.writeFileSync('notes.json',strData);
    
}

function  loadNotes(){
    try{
    const BufferData=file.readFileSync('notes.json');
    const JSONdata=BufferData.toString();
    const note=JSON.parse(JSONdata);
    return note;}catch(e)
    {
        return [];
    }
}


// ES5
// module.exports={
//     getNote:getNote,
//     addNote:addNote
// }