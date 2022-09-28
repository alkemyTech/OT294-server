const jwt_decoded = require('jwt-decode')

const Ownership = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt_decoded(token)
    const userId = decoded.id
    const isAdmin = decoded.role

    if (userId !== req.params.id && isAdmin !== 'admin') {
        return res.status(403).json({ error: 'Invalid user ID' })
    } else {
        if (isAdmin === 'admin') {
            next()
        } else {
            return res.status(403).json({ error: 'You are not an admin' })
        }
    }
}

module.export = Ownership;