let url = window.location.href.toString();

chrome.runtime.sendMessage({type: "url", body: window.location.href.toString()}, res => {
    if (res) alert(res)
})