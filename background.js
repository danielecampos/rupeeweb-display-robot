chrome.browserAction.onClicked.addListener(t => {
    if (t.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_grecia)/gi))
        chrome.tabs.executeScript(t.id, {file: 'display-robot-dashboard-greece.js'})
    else if (t.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_italia)/gi))
        chrome.tabs.executeScript(t.id, {file: 'display-robot-dashboard-italy.js'})
    else if (t.url.match(/^(https:\/\/www.rupee.com.br\/empresas\/\d+)/gi))
        chrome.tabs.executeScript(t.id, {file: 'display-robot-company-panel.js'})
})