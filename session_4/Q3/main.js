const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = 1090;

app.use(bodyParser.json());

app.get('/v1/user/:username', async (req, res) => {
    try {
        let username = req.params.username;
        let response = await axios.get(`https://api.github.com/users/${username}`);
        res.send(response.data);
    }
    catch (error) {
        res.send(error)
    }
})


app.listen(PORT, () => {
    console.log(`Server is listening : http://localhost:${PORT}`);
})