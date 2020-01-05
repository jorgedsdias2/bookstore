const Author = require('../models/Author');

module.exports = {
    async create(req, res) {
        console.log(req.body);
        try {
            const { name } = req.body;

            const author = await Author.create({ name });

            return res.json(author);
        } catch(err) {
            return res.status(400).json({ error: 'Created failed' });
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        await Author.findByIdAndUpdate(id, { name });
    }
}