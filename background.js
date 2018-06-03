function inject_script(tab) {
    if (tab.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_grecia)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-greece.js'})
    else if (tab.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_italia)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-italy.js'})
    else if (tab.url.match(/^(https:\/\/www.rupee.com.br\/empresas\/\d+)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-company-panel.js'});
}

function handleTabUpdate(tabId, changeInfo, tab) {
    if (changeInfo.status != 'complete')
        return;
    inject_script(tab);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    return;
});

chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.onUpdated.removeListener(handleTabUpdate);
    chrome.tabs.onUpdated.addListener(handleTabUpdate);
    inject_script(tab);
});