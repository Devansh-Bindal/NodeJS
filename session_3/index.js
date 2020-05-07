const express = require('express');
const app = express();
const PORT = 1250;
const userRouter = require('./routes/userRouter');

userRouter(app);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})