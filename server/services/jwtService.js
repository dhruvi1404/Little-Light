const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

exports.generateToken = (user) => {
    return jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        throw new Error('Token is not valid');
    }
};
