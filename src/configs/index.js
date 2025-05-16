const { connection } = require('mongoose')

const dotENV = require('dotenv').config()

isCloudUsing = false
module.exports = {
   Port: process.env.PORT,
   connectionStr: isCloudUsing? process.env.MONGO_CLOUD_ATLAS : process.env.MONGO_DOCKER_ATLAS,
}