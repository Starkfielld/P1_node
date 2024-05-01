const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
},
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
        Select: false,
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    console.log(hash);
    console.log(this);
    this.password = hash
})

const User = mongoose.model('User', userSchema);

module.exports = User;