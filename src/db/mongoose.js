const mongoose = require('mongoose')
const {url} = require('./config.js')
const connectDb = async () => {
    try {
        await mongoose.connect( url, {
            useUnifiedTopology: true,
            // useCreateIndex: false,
            useNewUrlParser: true
        })
        console.log('Database connected')
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = {connectDb}