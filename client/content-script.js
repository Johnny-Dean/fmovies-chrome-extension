chrome.runtime.sendMessage({type: "url", body: window.location.href.toString()}, response => {
    if (response) alert(response)
})