const notes = [];
function saveNote(content, id) {
    const noteInfo = {
        content,id
    }
    notes.push(noteInfo);
}
saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
saveNote('Doctors appointment', 7);
saveNote('call mom', 5);
saveNote('watch football', 2);//another note with same id with another content
console.log(notes);
function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
}
const firstNote = getNote(1);
console.log(firstNote);

const secondNote = getNote(2);
console.log(secondNote);

const anotherNote = getNote(2);
console.log(anotherNote);

const nextNote = getNote(5);
console.log(nextNote);

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following text:
        "${notes[i].content} !"`);
    }
}
logOutNotesFormatted();