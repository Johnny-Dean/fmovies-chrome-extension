const mongoose = require('mongoose');

const mongoAuthUrl = process.env.MONGODB_URI;
console.log('Attempting connection to: ' + mongoAuthUrl)

mongoose.connect(mongoAuthUrl)
    .then((res: any) => console.log('Succesfully connected to Mongo Database'))
    .catch((error: any) => console.log(error))

const mediaSchema = new mongoose.Schema({
    series: String,
    season: Number,
    episode: Number
})

module.exports = mongoose.model('Media_DB', mediaSchema);