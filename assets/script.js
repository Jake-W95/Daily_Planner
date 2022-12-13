var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, Do MMMM YYYY'))
var clock = moment().hour(12).format('HHA')
console.log(clock)

var container = $('.container');
var dayStart = moment(09,'h');

while (dayStart.hour() < 18){
    // container.append('<div class="row">')git add -
container.append('<div class="row">' +   `<div class="hour"> ${dayStart.format('ha')} </div>`); 
console.log($('.row'))
dayStart.add(1,'hours');
}
var row = $('.row');
row.append('<textarea>');
row.append('<button class="saveBtn">')
$('hour').append('hi')