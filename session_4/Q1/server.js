const express = require('express');
const app = express();
const PORT = 1345;
const userRouter = require('./router');

userRouter(app);

app.listen(PORT, () => {
    console.log(`Server is listening : http://localhost:${PORT}`);
})