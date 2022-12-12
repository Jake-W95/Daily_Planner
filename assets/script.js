var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, Do MMMM YYYY'))
var clock = moment().hour(12).format('HHA')
console.log(clock)

var container = $('.container');
var dayStart = moment(09,'h');

while (dayStart.hour() < 18){
container.append('<div class="row">', dayStart.format('ha'), '</div>');
var row = $('.row');
dayStart.add(1,'hours');
}