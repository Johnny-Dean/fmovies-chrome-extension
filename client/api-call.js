const BASEURL = 'http://localhost:3001/api/media'

export const addMedia = (media) => {
    console.log("Sent: " + media + " to database");
    fetch(BASEURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(media)
    })
}

export const getMedia = () => {
    fetch(BASEURL).then(res => console.log(res))
}
