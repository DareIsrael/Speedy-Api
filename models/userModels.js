const mongoose = require('mongoose')
const bcrypt = require ('bcrypt')
const validator = require ('validator')


const Schema = mongoose.Schema

const userSchema = new Schema ({
    fName: {
        type: String,
        require: true
    },
    lName: {
        type: String,
        require: true
    },
    cName: {
        type: String,
        required: true
    },
    
    phone: {
        type: Number,
        require: true
    },
    sAddress: {
        type: String,
        require: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    }
    
}, {timestamps: true })

userSchema.statics.signup = async function (fName, lName, cName, phone, sAddress, 
   city, country, email, password){

    if (!fName || !lName || !cName || !phone || !sAddress || !city || !country || !email || !password) {
        throw Error ('All fields must be filled')
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use')
    }

     const salt = await bcrypt.genSalt(10)
     const hash = await bcrypt.hash(password, salt)

     const user = await this.create({fName, lName, cName, phone, sAddress,
         city, country, email, password: hash})

         return user
}


//   LOGIN 


userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})

  if (!user) {
    throw Error ('Incorrect Email')
  }

const match = await bcrypt.compare( password, user.password)

if (!match) {
    throw Error ('Incorrect password')
}

return user

}


module.exports = mongoose.model('User', userSchema )