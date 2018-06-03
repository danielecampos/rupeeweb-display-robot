(function display_robot_company_panel() {
    let companies = document.querySelectorAll('.companies-container a');
    companies_url = [];
    for (c of companies)
        companies_url.push(c.href);
    url_ix = companies_url.lastIndexOf(window.location.href);
    if (url_ix === companies_url.length-1) {
        setTimeout( () => chrome.runtime.sendMessage({type: "display-robot-dashboard-greece"}), 3000 );
    } else {
        url_ix++;
        setTimeout( () => chrome.runtime.sendMessage({type: "display-robot-company-panel", data: companies_url[url_ix]}), 3000 );
    }
})();