const User = require ('../models/userModels')
const jwt = require ('jsonwebtoken')



const getCustomers = async (req, res) => {
   const users = await User.find({}).sort({createdAt: -1})
   res.status(200).json(users)
}





const createToken = (_id) => {
  return  jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}



//    LOGIN 


const loginUser = async (req, res) => {
     
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)
    
        const token = createToken(user._id)
    
    
        res.status(200).json({email, token})
    
     }catch (error) {
        res.status(400). json({error: error.message})
     }
    


}


    // SIGNUP 


const signupUser = async (req, res) => {

 const { fName, lName, cName, phone, sAddress,
    city, country, email, password} = req.body

 try {
    const user = await User.signup(fName, lName, cName, phone, sAddress,
        city, country,email, password)

    const token = createToken(user._id)


    res.status(200).json({fName, lName, cName, phone, sAddress,
        city, country, email, token})

 }catch (error) {
    res.status(400). json({error: error.message})
 }

    res.json({mssg: 'signup user'})
}


module.exports = {loginUser, signupUser, getCustomers}