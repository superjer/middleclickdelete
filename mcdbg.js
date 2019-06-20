chrome.contextMenus.create({
    "title": "Undo Middle Click (Ctrl+Shift+U)",
    "id": "undomiddleclickdelete",
    "contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "undomiddleclickdelete");
    });
});

