const http = require("http")
const path = require("path")
const fs = require("fs")
const dotenv = require("dotenv")


const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url)
    let extName = path.extname(filePath)

    let contentType = "text/html"

    switch (extName) {
        case ".css":
            contentType = "text/css"
            break;

        case ".png":
            contentType = "image/png"
            break;

        case ".js":
            contentType = "text/javascript"
            break;

        case ".json":
            contentType = "application /json"
            break;

        default:
            break;
    }


    // Check if the contentType is text/html and extName is "", add .html
    if (contentType === "text/html" && extName == "") filePath += ".html"


    console.log(filePath)

    fs.readFile(filePath, (err,content) => {
        if(err) 
            if(err.code =="ENOENT")


        res.writeHead(200,{
            "Content-Type": contentType
        })
        res.end(content,"utf8")
    }
    )

});

const PORT = process.env.PORT || 7000
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})