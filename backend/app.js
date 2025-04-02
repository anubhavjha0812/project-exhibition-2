import express from 'express'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (reg,res) => {
    res.send('hello world!');
});

export default app;