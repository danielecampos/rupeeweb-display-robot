'use strict';

(function display_robot_dashboard_italy(interval) {
    var el = document.getElementsByClassName('reveal-overlay')[1];
    if (el) 
        el.style.display = 'none';
    setTimeout(() => window.location.href = document.querySelector('.companies-container a').href, interval);    
})(10000);