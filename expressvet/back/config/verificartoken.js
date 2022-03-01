const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    let token = req.header('Authorization')
    if (!token) res.send({ 'msg': 'Access denied' })
    token = token.split(' ')[1]
    if (!token) res.send({ 'msg': 'Access denied' })
    try {
        let tokenPayload = jwt.verify(token, 'node-house')
        req.user = tokenPayload
        next()
    } catch (err) {
        res.send({ 'msg': 'Incorrect Token' })
    }
}

module.exports = verificarToken