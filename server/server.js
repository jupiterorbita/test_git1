const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "demo_full-stack1"

// ----- middleware ----
app.use(express.json(), cors(), express.urlencoded({extended:true}));
// -----------------

// database connection
require('./config/mongoose')(DB);

// connect the routes
require("./routes/routes")(app);

app.listen(PORT, ()=> console.log(`🎈🎈 server up on port: ${PORT}`))
