'use strict';

(function display_robot_dashboard_greece(interval) {
    var g = companies => {    
        var i = 0;        
        return function() {
            console.log('running display_robot_dashboard_greece');
            try {                
                companies_graphs.scrollTo(0, default_item_height * i);
                companies[i++].click();
                if (i === companies.length) {
                    clearInterval(drd_interval);
                    setTimeout(() => window.location.href = 'https://www.rupee.com.br/dashboard_italia', interval);
                }                    
            } catch (err) {
                clearInterval(drd_interval);
                throw err;
            }            
        };
    };    
    var companies_graphs = document.querySelector('.graphs-list');
    var companies = companies_graphs.querySelectorAll('.company-link');
    var default_item_height = companies_graphs.querySelector('.company-link li').offsetHeight;
    var drd_interval = setInterval(g(companies), interval);
    return drd_interval;
})(5000);