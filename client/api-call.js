const BASEURL = 'http://localhost:3001/api/media'

// what is a better way to send a single string?
export const addMedia = (media) => {
    console.log(media)
    fetch(BASEURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(media)
    })
}

