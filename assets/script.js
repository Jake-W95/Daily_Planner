var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, Do MMMM YYYY'))


var fullDay = $('.container');
var hour = $('<div>').addClass('hour').text('howdy');
fullDay.append(hour);