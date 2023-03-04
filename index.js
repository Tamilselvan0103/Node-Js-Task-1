const fs = require('fs')
const express = require('express')
const path = require('path')
const PORT = 5000
const app = express()
const contdirpath = path.join(__dirname, 'timestamp');
const date = new Date;
const dateTime = new Date(new Date().toUTCString().slice(0,-3));
const content = 'Last clicked TimeStamp :'+ dateTime;

fs.writeFile(`${contdirpath}/currentdate-time.txt`,content,(res)=>{
    console.log("file created")

})

app.get('/',(res,req)=>{
    res.sendFile(path.join(__dirname))
})

app.use(express.static("timestamp"));


app.listen(PORT, ()=>{
    console.log('server started localhost:9000');
})