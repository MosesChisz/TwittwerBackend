import express from 'express';
import userRoutes from './routes/userRoutes';
import twitterRoutes from "./routes/tweetRoutes"

const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/twitter', twitterRoutes);


app.get('/', (req, res) => {
    res.send('Hello World');
})


app.listen(3000, () => {
    console.log("Server ready at localhost:3000");
})