const {readFile} = require('fs').promises
const express = require('express')

const app = express()

app.get('/', async (req, res)=>{
    res.send(await readFile('./home.html', 'utf8'))
    // readFile('./home.html', 'utf8',(err, html)=>{
    //     if(err){
    //         res.status(500).send('sorry, out of order')
    //     }
    //     res.send(html)
    // })
})

app.listen(process.env.PORT || 3000, ()=>console.log('App available on http://localhost:3000'))
