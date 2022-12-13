var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, Do MMMM YYYY'))
var clock = moment().hour(12).format('HHA')
console.log(clock)

var container = $('.container');
var dayStart = moment(09,'h');

//Populate planner with rows
while (dayStart.hour() < 18){
container.append('<div class="row">' +   `<div class="hour"> ${dayStart.format('ha')} </div>`); 
dayStart.add(1,'hours');
}
var row = $('.row');
// append textarea and button
row.append('<textarea>');
row.append('<button class="saveBtn">');
// add icon to save button
$('.saveBtn').append('<i class="far fa-save"></i>')



// localStorage.getItem('key')
$('button').click(function(){
    console.log($(this).parent()[0].innerHTML)
    // console.log($(this).parent()[0].innerHTML, 'this/parents')
    console.log($('.row')[0].innerHTML, 'row 0')
    if($(this).parent()[0].innerHTML == $('.row')[0].innerHTML){
        localStorage.setItem('nineAM', 'nine AM')
    } else {
        alert('nope')
    }
//  localStorage.setItem('key', JSON.stringify($(this).prev()))
})
