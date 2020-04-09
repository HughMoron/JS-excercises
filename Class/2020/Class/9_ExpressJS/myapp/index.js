const express = require('express');
const path = require("path");
const logger = require("./middleware/logger")

const app = express();
const PORT = process.env.PORT || 5000;


// Init Middleware
// app.use(logger);

// Set static Folder
app.use(express.static(path.join(__dirname, "public")));

// Members Api Routes
app.use('/api/members', require('./routes/api/members'))



app.listen(PORT, () =>
    console.log(`Server started on port ${PORT}.`))

console.log()