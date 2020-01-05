const bcryptjs = require('bcryptjs');

const User = require('../models/User');
const Token = require('../helpers/Token');

module.exports = {
    async register(req, res) {
        try {
            const { email, name, password } = req.body;

            let user = await User.findOne({ email });

            if(user)
                return res.status(400).json({ error: `User already exists` });

            const hashedPassword = await bcryptjs.hashSync(password, 8);
            const userData = { email, name, password: hashedPassword };
            user = await User.create(userData);

            return res.json(user);
        } catch(err) {
            return res.status(400).json({ error: `Registration failed` });
        }
    },

    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if(!user)
            return res.status(400).json({ error: `User not found` });

        const passwordIsValid = await bcryptjs.compareSync(password, user.password);

        if(!passwordIsValid)
            return res.status(400).json({ error: `Invalid password` });

        const token = await Token.generate(user);

        res.json({ user, token });
    }
};