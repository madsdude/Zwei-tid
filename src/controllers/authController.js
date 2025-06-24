const User = require('../models/user');
const bcrypt = require('bcrypt');

class AuthController {
    async register(req, res) {
        const { username, password } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.createUser(username, hashedPassword);
            res.status(201).json({ message: 'User registered', user: { username: user.username } });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async login(req, res) {
        const { username, password } = req.body;
        try {
            const user = await User.findByUsername(username);
            if (!user) return res.status(401).json({ error: 'Invalid credentials' });
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
            req.session.user = { id: user.id, username: user.username };
            res.json({ message: 'Login successful' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new AuthController();