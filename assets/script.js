var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, Do MMMM YYYY'))
var clock = parseFloat(moment().format('HH'))
console.log(clock)

var nine = $('#9').text(moment().hours(9).format('HHA'));
var ten = $('#10').text(moment().hours(10).format('HHA'));
var elvn = $('#11').text(moment().hours(11).format('HHA'));
var twlv = $('#12').text(moment().hours(12).format('HHA'));
var one = $('#13').text(moment().hours(13).format('HHA'));
var two = $('#14').text(moment().hours(14).format('HHA'));
var three = $('#15').text(moment().hours(15).format('HHA'));
var four = $('#16').text(moment().hours(16).format('HHA'));
var five = $('#17').text(moment().hours(17).format('HHA'));

