(function display_robot_company_panel() {
    let companies = document.querySelectorAll('.companies-container a');
    let companies_urls = [];
    for (c of companies) 
        companies_urls.push(c.href);
    console.log(companies_urls);
    let drcp_interval = setInterval(() => window.scrollBy(0, 8), 250);
})();