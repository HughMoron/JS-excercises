const  path = require("path")
//it's a core module already included with Node.js

// console.log(path)

// get the base file name (basename)
console.log(path.basename(__filename))

// get the Directory name
console.log(path.dirname(__filename))
console.log(path.dirname("index.js"))
console.log(__dirname)
