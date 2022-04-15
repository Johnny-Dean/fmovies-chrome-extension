import { addMedia } from "./api-call.js";

const submitBtn = document.getElementById('submit-btn')
let series, episode, season;

submitBtn.addEventListener('click', () => {
    handleClick();
})

const handleClick = () => {
    getUrl()
        .then(
            res => {
                parseUrl(res);
                addMedia({series, season, episode});
            }
    );
}

export const getUrl = async () => {
    const queryOptions = {active: true, currentWindow: true};
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab.url;
}

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
    series  = removeId(splitUrl[4]);
    season  = splitUrl[5].split("-")[0];
    episode = splitUrl[5].split("-")[1];
}


