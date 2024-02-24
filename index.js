import express from 'express';

const PORT = process.env.PORT || 3300;

const app = express();

app.get('/', (req, res)=>{
    res.json(req.query);
})


app.get('/test', (req, res)=>{
    res.send('Hello world');
})

app.listen(PORT, ()=>{
    console.log('App running...')
})