(function display_robot_dashboard_greece(interval) {    
    let g = companies => {    
        var i = 0;
        return function() {
            try {
                companies[i++].click();
                if (i === companies.length) {
                    clearInterval(drd_interval);
                    setTimeout(() => {
                        let company_url = companies[0].href.replace('dashboard_grecia/', '');
                        chrome.runtime.sendMessage({type: "display-robot-company-panel", data: company_url});
                    }, interval);
                }
            } catch (err) {
                clearInterval(drd_interval);
                throw err;
            }
        };
    };    
    let companies = document.getElementsByClassName('company-link');
    let drd_interval = setInterval(g(companies), interval);
    return drd_interval;
})(5000);