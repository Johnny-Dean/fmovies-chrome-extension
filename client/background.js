import { getMedia } from "./api-call.js";

chrome.runtime.onStartup.addListener(() => {
    getMedia();
})