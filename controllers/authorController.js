const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER
exports.register = async(req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
          });
          const user = await newUser.save();
          res.status(200).json(user);
    }catch(err) {
        res.status(500).json(error);
    }
}

exports.login = async(req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json('Wrong credential');
        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated &&  res.status(400).json('Wrong credential');

        const {password , ...other} = user._doc
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
        
    }
}
