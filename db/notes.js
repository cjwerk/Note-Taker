const util = require("util");
const fs = require("fs");

const readFileAsyn = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
    constructor() {
this.idDum = 0;
    }
        read() {
            return readFileAsyn("db/db.json", "utf8");
        }
        getNotes() {
            return this.read().then(notes => {
                let notesArray;
                try{
                    notesArray = [].concat(JSON.parse(notes));
                }
                catch (err) {
                    notesArray = [];
                }
                return notesArray;
            })
        }

        addNotes(note) {
            const { title, text} = note;
            const newNote = { title, text, id: ++this.idDum}
            return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updateNotes => this.write(updateNotes))
            .then(() => newNote)
        }
    }


    module.exports = new Notes();
