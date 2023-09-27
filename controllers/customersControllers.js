// login

const loginCustomer = async (req, res ) => {
    res.json({mssg: 'login customer'})
}


//  register

const registerCustomer = async (req, res) => {
    res.json({mssg: 'register customer'})
}

module.exports = { loginCustomer, registerCustomer}