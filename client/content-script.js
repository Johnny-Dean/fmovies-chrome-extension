getMedia = () => {
    fetch('http://localhost:3001/api/media').then(res => console.log(res))
}
getMedia();