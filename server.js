import userRouter from './api/route.user.js';
import express from 'express';
// import cors from 'cors';

const app = express();
app.use(express.json());
// app.use(cors);
let port = process.env.PORT || 8000;

// const indexRoutes = require('./api/route.index.js');

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Job Application Manager');
    console.log('Welcome to the Job Application Manager');
});

app.use('/api/v1/user', userRouter);



app.listen(port, (err) => {
    if (err) {
        console.log("Cannot listent to the port. ", err);
        return;
    }
    console.log(`Listening to port ${port}....`);
})
