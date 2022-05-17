const mongoose = require('mongoose');

// alternative way
module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`🦄🦄🦄 connected to ${DB} db `))
        .catch(err => console.log(`⚠⚠⚠ cannot connect to ${DB}`, err))
}