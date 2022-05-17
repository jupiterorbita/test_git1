// controller is for CRUD
// import the model
const Note = require('../models/note.model')

module.exports = {

    // READ ALL
    findAll: (req, res) => {
        Note.find()
            .then((allNotes) => {
                // 🆘 
                return res.json(allNotes)
            })
            .catch(err => res.status(400).json(err))
    },

    // CREATE 
    create: (req, res) => {
        console.log(req.body);
        Note.create(req.body)
            .then(newNote => {
                console.log("DB SUCCESS");
                return res.json(newNote)
            })
            .catch(err => {
                console.log("DB ERROR");
                return res.json(err)
                // return res.status(400).json({message :"not ok", myError: err})
                // return res.status(400).json(err)
            })
    },

    // READ ONE
    findOne: (req, res) => {
        console.log(req.params);
        // Note.findOne({_id: req.params.id})
        Note.findById(req.params.unicorn_id)
            .then(note => res.json(note))
            .catch(err => res.status(400).json(err))
    },

    // UPDATE
    update: (req, res) => {
        Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedNote => res.json(updatedNote))
            .catch(err => res.status(400).json(err))
    },

    // DELETE
    delete: (req, res) => {
        Note.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err))
    }

}