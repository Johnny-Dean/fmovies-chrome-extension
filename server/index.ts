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

// for now just push every thing watched as a series, episode, season but there is definitely a way
// to combine these


app.get('/api/media', (request: any, response: any) => {
    Media_Db.find({}).then((result: Media[]) => {
        response.json(result)
    })
})

app.post('/api/media', (request: any, response: any) => {
    const body = request.body;
    console.log(body);
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