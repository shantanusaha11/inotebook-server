const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.use(express.json())


app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get("/", (_req,res)=>{
  res.send("iNotebook is running");
})

app.listen(port, () => {
  console.log(`iNotebook app listening at ${port}`);
})
