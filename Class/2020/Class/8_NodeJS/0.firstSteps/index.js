const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req,res) => {
    console.log(req.url)
    res.end("<h1>Stay at Home<h1>")
})

const PORT = process.env.PORT || 7000
server.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})

