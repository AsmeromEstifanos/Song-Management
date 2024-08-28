import express from "express";

const app = express();
const PORT:Number=3000;

app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!')
})

app.listen(PORT, () => {
    console.log('Listening on ' + PORT)
})