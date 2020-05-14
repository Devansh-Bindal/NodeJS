const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const mongoose = require("mongoose");
const flash = require('connect-flash');
const session = require('express-session');
const passport=require('passport');
const PORT = 1465;

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Body-parser
app.use(express.urlencoded({ extended: true }));

//Passport Config
require('./config/passport')(passport);
require('./config/Google/passport')(passport);


//Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
app.use(flash());

//Global vars(dfferent colors on msgs)
app.use((req,res,next)=>{
  res.locals.success=req.flash('success');
  res.locals.error=req.flash('error');
  next();
});

//Routes
app.use("/", require("./routes/index"));
app.use('/users', require('./routes/users'));

//Mongoose
mongoose.connect("mongodb://localhost:27017/dashboard", {
  useNewUrlParser: "true",
  useUnifiedTopology: "true",
  useFindAndModify: false
  //   useCreateIndex: "true",
});

mongoose.connection.on("error", err => {
  console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
});


app.listen(PORT, () => {
  console.log(`Server is listening : http://localhost:${PORT}`);
})
