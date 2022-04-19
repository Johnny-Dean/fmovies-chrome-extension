const parseUrl = (url) => {
    const removeId = (series) => {
        const arr = series.split("-");
        arr.pop();

        // string formatting
        let seriesTitle = '';
        for(const word of arr){
            seriesTitle += word;
            seriesTitle += ' ';
        }

        // trim white space at end
        return seriesTitle.trim();
    }
    // "https://fmovies.to/series/family-guy-pmjnj/5-6" => "family-guy-pmjnj/5-6"
    const splitUrl = url.split("/")
    // "family-guy-pmjnj" => "family guy"
    return {
        series: removeId(splitUrl[4]), 
        season: parseInt(splitUrl[5].split("-")[0]), 
        episode: parseInt(splitUrl[5].split("-")[1])
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const media = parseUrl(request.body);
    
    fetch(`http://localhost:3001/api/media/${media.series}/${media.season}/${media.episode}`).then(res => {
        res.json().then(parsedRes => {
            if (parsedRes.watched) {
                sendResponse(`we have watched this ${parsedRes.amount} times`);  
            }
        });
    })
    return true;
    
})

