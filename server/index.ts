interface Media {
    series: string,
    season: number,
    episode: number
}

require('dotenv').config();

const express = require('express')
const app = express();
const cors = require('cors') 
const Media_Db = require('./models/media')
app.use(cors());
app.use(express.json());

// is it proper web practice to return a boolean here?
app.get('/api/media/:series/:season/:ep', (request: any, response: any) => {
    console.log(request.params);
    Media_Db.find({series: request.params.series, season: request.params.season, ep: request.params.ep}).then((result: Media[]) => {
        if (result.length !== 0){
            return response.json({watched: true, amount: result.length});
        }
        else {
            return response.json({watched: false, amount: 0})
        }
    })
})

// ask sif if the parsing should be handled by the front end or back end and why, it
// seems that it could be handled by front end because sending the url in a body request is poor practice

app.post('/api/media', (request: any, response: any) => {
    const body = request.body;
    if (body === undefined) {
        return response(400).json({error: 'content missing'})
    }
    const media = new Media_Db({
        series:  body.series,
        season:  body.season,
        episode: body.episode
    })

    media.save().then((savedMedia: Media) => response.json(savedMedia))
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});