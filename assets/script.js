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
row.append('<textarea name="text-area">');
row.append('<button class="saveBtn">');
// add icon to save button
$('.saveBtn').append('<i class="far fa-save"></i>')



// Individual rows
var row9AM = container.children()[0];
var row10AM = container.children()[1];
var row11AM = container.children()[2];
var row12PM = container.children()[3];
var row1PM = container.children()[4];
var row2PM = container.children()[5];
var row3PM = container.children()[6];
var row4PM = container.children()[7];
var row5PM = container.children()[8];

// console.log(row4PM, '4pm')



// row9AM.children[1].text('text')


$('button').click(function(){
    var thisRow = $(this).parent()[0].innerHTML;
    var tBoxVal = $(this).siblings()[1].value;
// console.log(th, 'tBox')
    if( thisRow == row9AM.innerHTML)  {
        localStorage.setItem('9AM', tBoxVal)
}
    if( thisRow == row10AM.innerHTML){
    localStorage.setItem('10AM', tBoxVal )
}
    if(thisRow == row11AM.innerHTML){
        localStorage.setItem('11AM', tBoxVal)
    }
    if(thisRow == row12PM.innerHTML){
        localStorage.setItem('12PM', tBoxVal)
    }
    if(thisRow == row1PM.innerHTML){
        localStorage.setItem('1PM', tBoxVal)
    }
    if(thisRow == row2PM.innerHTML){
        localStorage.setItem('2PM', tBoxVal)
    }
    if(thisRow == row3PM.innerHTML){
        localStorage.setItem('3PM', tBoxVal)
    }
    if(thisRow == row4PM.innerHTML){
        localStorage.setItem('4PM', tBoxVal)
    }
    if(thisRow == row5PM.innerHTML){
        localStorage.setItem('5PM', tBoxVal)
    }
})





// if($(this).parent()[0].innerHTML == $('.row')[0].innerHTML){
//     localStorage.setItem('nineAM', 'nine AM')
// }

// function nineAM(){
  
// }
// function tenAM(){
//     if($(this).parent()[0].innerHTML == $('.row')[1].innerHTML){
//         localStorage.setItem('10AM', $(this).parent()[0].innerHTML)
//     }
// }
// function elvnAM(){
//     if($(this).parent()[0].innerHTML == $('.row')[2].innerHTML){
//         localStorage.setItem('11AM', $(this).parent()[0].innerHTML)
//     }
// }
// function twlvAM(){
//     if($(this).parent()[0].innerHTML == $('.row')[3].innerHTML){
//         localStorage.setItem('12AM', $(this).parent()[0].innerHTML)
//     }
// }
// function onePM(){
//     if($(this).parent()[0].innerHTML == $('.row')[4].innerHTML){
//         localStorage.setItem('1PM', $(this).parent()[0].innerHTML)
//     }
// }
// function twoPM(){
//     if($(this).parent()[0].innerHTML == $('.row')[5].innerHTML){
//         localStorage.setItem('2PM', $(this).parent()[0].innerHTML)
//     }
// }
// function threePM(){
//     if($(this).parent()[0].innerHTML == $('.row')[6].innerHTML){
//         localStorage.setItem('3PM', $(this).parent()[0].innerHTML)
//     }
// }
// function fourPM(){
//     if($(this).parent()[0].innerHTML == $('.row')[7].innerHTML){
//         localStorage.setItem('4PM', $(this).parent()[0].innerHTML)
//     }
// }
// function fivePM(){
//     if($(this).parent()[0].innerHTML == $('.row')[8].innerHTML){
//         localStorage.setItem('5PM', $(this).parent()[0].innerHTML)
//     }
// }








