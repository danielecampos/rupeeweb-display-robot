var current_tab;
var listening_tab_update = false;

function inject_script(tab) {
    if (tab.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_grecia)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-greece.js'})
    else if (tab.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_italia)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-italy.js'})
    else if (tab.url.match(/^(https:\/\/www.rupee.com.br\/empresas\/\d+)/gi))
        chrome.tabs.executeScript(tab.id, {file: 'display-robot-company-panel.js'});
}

function handleTabUpdated(tabId, changeInfo, tab) {
    if (changeInfo.status != 'complete')
        return;
    inject_script(tab);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type == "display-robot-company-panel")
        chrome.tabs.update(current_tab.id, {url: message.data})
    else if (message.type == "display-robot-dashboard-greece")
        chrome.tabs.update(current_tab.id, {url: 'https://www.rupee.com.br/dashboard_grecia'});
});

chrome.browserAction.onClicked.addListener(tab => {
    current_tab = tab;

    if (listening_tab_update) {
        chrome.tabs.onUpdated.removeListener(handleTabUpdated);        
    } else {
        chrome.tabs.onUpdated.addListener(handleTabUpdated);
        inject_script(tab);
    };
    
    listening_tab_update = !listening_tab_update;
});