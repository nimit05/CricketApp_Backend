const {Router} = require('express')
const route = Router()

route.use('/register' , require('./signup').route)
route.use('/user' , require('./user').route)
route.use('/skills' , require('./skills').route)
route.use('/login' , require('./login').route)
route.use('/chat' , require('./chat').route)
route.use('/users' , require('./users').route)
route.use('/notifications' , require('./notification').route)
route.use('/tourna' , require('./tournament').route)
route.use('/team' , require('./team').route)

module.exports = {route}