const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const http = require('http');
const biodata = require('./models/personalData')
const message = require('./models/messageData');

dotenv.config();
require('./config');
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs')

app.post('/api/insertData', async (req, res) => {
    const data = new biodata(req.body);
    await data.save();
    res.send("Data saved successfully")
})

app.get('/api/getData', async (req, res) => {
    const data = await biodata.findOne();
    res.json(data)
})


app.get('/', async (req, res) => {
    try {
        const messages = await message.find().sort({_id: -1});
        res.render('home', { messages })
    } catch (err) {
        res.send('Error occured')
    }
})
app.post('/api/message', async (req, res) => {
    const data = new message(req.body);
    await data.save();
    res.send("Data saved successfully")
})



server.listen(port, () => {
    console.log("Your app is running")
})
