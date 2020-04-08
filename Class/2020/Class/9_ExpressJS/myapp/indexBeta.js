if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
// const express =  require('express');
// const morgan = require('morgan');
// const app = express()

const app = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});


// const PORT = process.env.PORT || 8585;

// app.use(morgan("dev"));
// app.use(express.static(__dirname));

// app.get('/',(req,res)=>{
//     res.send("Hello there...")
// })

// app.listen(PORT,() => {
//     console.log(`Application is listening to the port: ${PORT}`)
// })

// Array.filter()
console.log(process.env.PORT)
