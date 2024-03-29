const bcrypt = require('bcriypt');
const helpers = {};

helpers.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

helpers.matchPassword = async (password, savedPassword) => {
    try{
        await bcrypt.compare(password, savedPassword);
    }catch(err){
        console.log('se ha producido un error ' + err)
    }    
};


module.exports = helpers;