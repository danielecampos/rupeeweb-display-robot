'use strict';

(function display_robot_company_panel(interval) {
    console.log('running display_robot_company_panel');
    var companies = document.querySelectorAll('.companies-container a');
    var companies_url = [];
    for (let c of companies)
        companies_url.push(c.href);
    var current_url_ix = companies_url.lastIndexOf(window.location.href);
    var next_url;
    if (current_url_ix === companies_url.length-1) 
        next_url = 'https://www.rupee.com.br/dashboard_grecia'
    else
        next_url = companies_url[current_url_ix+1];
    setTimeout(() => window.location.href = next_url, interval);
})(5000);