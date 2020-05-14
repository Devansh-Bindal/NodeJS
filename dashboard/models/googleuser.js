const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  token:  {
    type:String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const googleUser = mongoose.model("Google", googleSchema);
module.exports = googleUser;