// This file grabs the river data

// It grabs using waterservices.usgs.gov's json url retriever, and uses anyorigin.com to act as the mirror site to get past origin errors.
// It uses getJSON then a callback function for each river respectively. 
// river[0] is the name, but we hard coded it to get a more consise name.
// river[1] is the river flow
// river[2] is the cfs, the comment is the way to pull the labeling from the site which is a bit more than cfs.

// It then puts them in their respective divs and cycles through them.

// Created by Jacob Wolniewicz




$(document).ready(function () {


    // BOULDERCREEK
    $.getJSON('http://anyorigin.com/get?url=http%3A//waterservices.usgs.gov/nwis/iv/%3Fsites%3D06730200%26format%3Djson&callback=?', callbackFuncWithDataBoulder);
    // ARKANSAS RIVER
    $.getJSON('http://anyorigin.com/get?url=http%3A//waterservices.usgs.gov/nwis/iv/%3Fsites%3D07091200%26format%3Djson&callback=?', callbackFuncWithDataArkansas);
    // CLEAR CREEK
    $.getJSON('http://anyorigin.com/get?url=http%3A//waterservices.usgs.gov/nwis/iv/%3Fsites%3D06719505%26format%3Djson&callback=?', callbackFuncWithDataClearCreek);
    // GORE CANYON
    $.getJSON('http://anyorigin.com/get?url=http%3A//waterservices.usgs.gov/nwis/iv/%3Fsites%3D09058000%26format%3Djson&callback=?', callbackFuncWithDataGoreCanyon);
    // POUDRE
    $.getJSON('http://anyorigin.com/get?url=http%3A//waterservices.usgs.gov/nwis/iv/%3Fsites%3D06752260%26format%3Djson&callback=?', callbackFuncWithDataPoudre);

    var river = new Array();
    function callbackFuncWithDataBoulder(data) {
        result = eval(data);
        river[0] = "Boulder Creek" + "<br> "; //result['contents']['value']['timeSeries'][0]['sourceInfo']['siteName'];
        river[1] = result['contents']['value']['timeSeries'][0]['values'][0]['value'][0]['value'];
        river[2] = "cfs"; //result['contents']['value']['timeSeries'][0]['variable']['variableName'];
        $("#content1").append(river[0] + " " + river[1] + " " + river[2] + "<br> ");/**/
        if (river[1] == -999999) {
            $("#content1").remove();
        }
    }
    function callbackFuncWithDataArkansas(data) {
        result = eval(data);
        river[0] = "Arkansas River" + "<br> "; //result['contents']['value']['timeSeries'][0]['sourceInfo']['siteName'];
        river[1] = result['contents']['value']['timeSeries'][0]['values'][0]['value'][0]['value'];
        river[2] = "cfs"; //result['contents']['value']['timeSeries'][0]['variable']['variableName'];
        $("#content2").append(river[0] + " " + river[1] + " " + river[2] + "<br> ");/**/
        if (river[1] == -999999) {
            $("#content2").remove();
        }
    }
    function callbackFuncWithDataClearCreek(data) {
        result = eval(data);
        river[0] = "Clear Creek" + "<br> "; //result['contents']['value']['timeSeries'][0]['sourceInfo']['siteName'];
        river[1] = result['contents']['value']['timeSeries'][0]['values'][0]['value'][0]['value'];
        river[2] = "cfs"; //result['contents']['value']['timeSeries'][0]['variable']['variableName'];
        $("#content3").append(river[0] + " " + river[1] + " " + river[2] + "<br> ");/**/
        if (river[1] == -999999) {
            $("#content3").remove();
        }
    }
    // Gore Canyon's returned json is a wee bit different so has its own callback Function.
    function callbackFuncWithDataGoreCanyon(data) {
        result = eval(data);
        river[0] = "Gore Canyon" + "<br> "; //result['contents']['value']['timeSeries'][0]['sourceInfo']['siteName'];
        river[1] = result['contents']['value']['timeSeries'][1]['values'][0]['value'][0]['value'];
        river[2] = "cfs"; //result['contents']['value']['timeSeries'][1]['variable']['variableName'];
        $("#content4").append(river[0] + " " + river[1] + " " + river[2] + "<br> ");/**/
        if (river[1] == -999999) {
            $("#content4").remove();
        }
    }
    function callbackFuncWithDataPoudre(data) {
        result = eval(data);
        river[0] = "Poudre at Narrows" + "<br> "; //result['contents']['value']['timeSeries'][0]['sourceInfo']['siteName'];
        river[1] = result['contents']['value']['timeSeries'][0]['values'][0]['value'][0]['value'];
        river[2] = "cfs"; //result['contents']['value']['timeSeries'][0]['variable']['variableName'];
        $("#content5").append(river[0] + " " + river[1] + " " + river[2] + "<br> ");/**/
        if (river[1] == -999999) {
            $("#content5").remove();
        }
    }


    // Cycle through them
    i = 0;
    (function cycle() {
        var divs = $('div[id^="content"]').hide();
        divs.eq(i).fadeIn(400)
                  .delay(5000)
                  .fadeOut(400, cycle);

        i = ++i % divs.length;
    })();

});
