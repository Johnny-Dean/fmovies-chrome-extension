chrome.runtime.sendMessage({type: "url", body: window.location.href.toString()}, response => {
    alert(response)
})