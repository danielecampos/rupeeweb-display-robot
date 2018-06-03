'use strict';

(function display_robot_dashboard_greece(interval) {
    var g = companies => {    
        var i = 0;
        return function() {
            console.log('running display_robot_dashboard_greece');
            try {
                companies[i++].click();
                if (i === companies.length) {
                    clearInterval(drd_interval);
                    //setTimeout(() => window.location.href = document.querySelector('.companies-container a').href, interval);
                    setTimeout(() => window.location.href = 'https://www.rupee.com.br/dashboard_italia', interval);
                }                    
            } catch (err) {
                clearInterval(drd_interval);
                throw err;
            }            
        };
    };    
    var companies = document.getElementsByClassName('company-link');
    var drd_interval = setInterval(g(companies), interval);
    return drd_interval;
})(5000);