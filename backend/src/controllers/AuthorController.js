const Author = require('../models/Author');

module.exports = {
    async create(req, res) {
        try {
            const { name } = req.body;

            const author = await Author.create({ name });

            return res.json(author);
        } catch(err) {
            return res.status(400).json({ error: `Created failed` });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const author = await Author.findByIdAndUpdate(id, { name });

            return res.json(author);
        } catch(err) {
            return res.status(400).json({ error: `Updated failed` });
        }
    }
}