import appoinment from "./appoinment.js";
import testimonial from './testimonial.js';
import fassistment from './fassistment.js';

$(document).ready(function(){
    $('.ri-menu-3-line').click(function(){
        $('.hidemenu').slideToggle();
    });
    $('.hidemenu .nav-link').click(function(){
        $('.hidemenu').slideToggle();
    })
});