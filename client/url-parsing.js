// @INPUT URL example: https://fmovies.to/series/family-guy-pmjnj/5-6
// Parse the URL by .split with delimiter '-' , which gives us an array  
// [4] [5] are indexes for series and episode  
export const parseUrl = (url) => {
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
