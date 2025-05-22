const { connection } = require('mongoose')

const dotENV = require('dotenv').config()

module.exports = {
   Port: process.env.PORT,
   connectionStr: process.env.IS_CLOUD_USING? process.env.MONGO_CLOUD_ATLAS : process.env.MONGO_DOCKER_ATLAS,
}