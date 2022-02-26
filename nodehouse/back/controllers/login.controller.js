const agents = require("../models/agents")

const loginctrl = (req, res) => {
    req.body.email && req.body.password ?
        agents.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                res.send({ 'msg': err })
            } else {
                switch (true) {
                    case (user == null):
                        res.send({ 'msg': 'User do not exist' })
                        break;
                    case (user.password == req.body.password):
                        let token = user.generateJWT()
                        res.send({ 'msg': 'Login', token})
                        break;
                    default:
                        res.send({ 'msg': 'Incorrect password' })
                }
            }
        })
        :
        res.send({ "msg": "Missing info" })
}

module.exports = loginctrl