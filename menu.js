function changefont(info, tab) {
    var element;
    chrome.tabs.sendMessage(tab.id, 'monobar-changefont', null);
}

chrome.contextMenus.create({
    'title': 'Toggle monospace font',
    'contexts': ['editable'],
    'onclick': changefont
});
