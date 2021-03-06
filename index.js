var express = require('express');
var cors = require('cors')
var app = express();
const bp = require('body-parser');
const { db } = require("./util/admin");
const PORT = process.env.PORT || 5050;
let id = "8Rwvh05zebe9sbBYDKRcFRnZnY83";
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

//income
app.get('/income', (req, res) => {
    try{
        db.ref(id+'/income').once('value')
        .then(function(snapshot) {
            console.log( snapshot.val() )
            res.send('Request Successful')
        })
    }catch(e){
        res.send('Error while making request: ' + e)
    }
})

app.post('/income', (req, res) => {
    try{
        db.ref(id+'/income').push(req.body).then(()=>{
            res.send('Post Successful')
        })
    }catch(e){
        res.send('Error while making request: ' + e)
    }
})

app.put('/income', (req, res) => {
    try{
        console.log(req.body)
    }catch(e){
        res.send('Error while making request: ' + e)
    }
})

app.delete('/income', (req, res) => {
    try{
        db.ref(id+'/income/'+req.body.id).remove().then(()=>{
            res.send('Deletion Successful')
        })
    }catch(e){
        res.send('Error while making request: ' + e)
    }
})

//expenses
app.get('/expense', (req, res) => {
    try{
        db.ref(id+'/expense').once('value')
        .then(function(snapshot) {
            res.send('Request Successful')
        })
        res.end({})
    }catch(e){
        res.send('Error while making request: ' + e)
    }
})

app.post('/expense', (req, res) => {
    try{
        // console.log(currentDate())
        db.ref(req.body.uid+'/expense/'+currentDate()).set(req.body).then(()=>{
            res.send('Post Successful')
        })
    }catch(e){
        res.send('Error while making request: ' + e)
    }
})

app.put('/expense', (req, res) => {
    try{
        console.log(req.body)
    }catch(e){
        res.send('Error while making request: ' + e)
    }
})

app.delete('/expense', (req, res) => {
    try{
        db.ref(id+'/expense/'+req.body.id).remove().then(()=>{
            res.send('Deletion Successful')
        })
    }catch(e){
        res.send('Error while making request: ' + e)
    }
})

function currentDate(){
    const d_t = new Date();
    let year = d_t.getFullYear();
    let month = d_t.getMonth()+1;
    let day = d_t.getDate();
    let hour = d_t.getHours();
    let minute = d_t.getMinutes();
    let seconds = d_t.getSeconds();
    let miliSecs = d_t.getMilliseconds();
    return year+""+month+""+day+""+hour+""+minute+""+seconds+""+miliSecs;
}

app.listen(PORT, function () {
    console.log(`spendTrackerAPI running: ${PORT}!`); 
});