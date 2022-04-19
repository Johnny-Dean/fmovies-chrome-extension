import { addMedia } from "./api-call.js";
import { parseUrl } from "./url-parsing.js";
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', () => {
    handleClick();
})

const getUrl = async () => {
    const queryOptions = {active: true, currentWindow: true};
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab.url;
}

const handleClick = () => {
    getUrl()
        .then(
            res => {
                addMedia(parseUrl(res));
            }
    );
} 




