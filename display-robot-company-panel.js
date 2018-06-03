'use strict';

(function display_robot_company_panel() {
    console.log('running display_robot_company_panel');
    var companies = document.querySelectorAll('.companies-container a');
    var companies_url = [];
    for (let c of companies)
        companies_url.push(c.href);
    var current_url_ix = companies_url.lastIndexOf(window.location.href);
    if (current_url_ix === companies_url.length-1) 
        window.location.href = 'https://www.rupee.com.br/dashboard_grecia'
    else
        window.location.href = companies_url[current_url_ix+1];
})();