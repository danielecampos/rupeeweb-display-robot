function inject_script(tab) {
    if (tab.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_grecia)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-greece.js'})
    else if (tab.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_italia)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-italy.js'})
    else if (tab.url.match(/^(https:\/\/www.rupee.com.br\/empresas\/\d+)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-company-panel.js'});
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status != 'complete')
        return;
    inject_script(tab);
});

chrome.browserAction.onClicked.addListener(tab => {
    //inject_script(tab);
});