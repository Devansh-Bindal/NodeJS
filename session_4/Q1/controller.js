const userData = require('./userdata');

module.exports.session = (req, res) => {
    const sessionObj = req.session;
    sessionObj.cookie.originalMaxAge = 30000;
    res.send({
        message: 'Session is created',
        sessionID: req.sessionID
    });
}

module.exports.getAll = (req, res) => {
    if (req.headers.sessionID) {
        res.send(userData);
    } else {
        res.send({ message: 'Please Start Session To Get All Users' });
    }
}

module.exports.addNewUser = (req, res) => {
    if (req.body.sessionID) {
        let lengthQuery = Object.keys(req.query).length;
        if (lengthQuery > 1) {
            if (req.query.email !== '' && req.query.name !== '') {
                userData.users.push(req.query);
                res.send({ message: 'User Inserted Successful' })
            } else {
                res.send({ message: 'Email Address And Name Is Manadatory' })

            }
        } else {
            res.send({ message: 'User Insertion Failed' })

        }
    } else {
        res.send({ message: 'Please Start Session To Add New Users' });

    }

}

module.exports.delete = (req, res) => {
    if (req.headers.sessionID) {
        let updatedUserData = userData.users.filter(user => user.email !== req.query.email);
        if (updatedUserData.length === userData.users.length) {
            res.send({ message: 'Enter Valid Email' });

        } else {
            userData.users.splice(0, userData.users.length);
            userData.users.push(...updatedUserData);
            res.send({ message: `${req.query.email} deleted successfully` })
        }
    } else {
        res.send({ message: 'Please Start Session To Delete Users' });
    }

}

