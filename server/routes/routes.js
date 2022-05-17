// import the controller
const Note = require("../controllers/controller");
// console.log(Note);

module.exports = (app) => {
    app.get("/api/notes", Note.findAll)
    app.post("/api/notes", Note.create)
    app.get("/api/notes/:unicorn_id", Note.findOne)
    app.put("/api/notes/:id", Note.update)
    app.delete("/api/notes/:id", Note.delete)
}