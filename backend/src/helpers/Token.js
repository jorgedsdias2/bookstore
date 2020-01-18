const jwt = require('jsonwebtoken');

const envConfig = require('../config/env');

module.exports = {
    async generate(user) {
        const token = jwt.sign({ id: user._id }, envConfig.secret, {
            expiresIn: 86400
        });

        return token;
    },

    async verify(req, res, next) {
        const token = req.headers['x-access-token'];
        if(!token)
            return res.status(400).json({ error: 'No token provided' });

        jwt.verify(token, envConfig.secret, (err, decoded) => {
            if(err) return res.status(400).json({ error: 'Failed to authenticate token' });

            req.userId = decoded.id;
            next();
        });
    }
}