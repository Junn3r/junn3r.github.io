'use strict'

$(document).ready(function () {

    //clock
    const clock = function (){
        return moment().format('MMMM Do YYYY, h:mm:ss a');
    }

    setInterval(() => {
        clock();
        $("#clockDiv").html(clock);
    }, 1000);;

});