

$('span').click(function(){
    let spanLeft=$('span').offset().left;
    let navWidth=$('.navbar').outerWidth();
    console.log(navWidth);
    if(spanLeft === 0){
        $('.navbar').css({left: `0px` , transition:'left 1s'})
        $('span').css({left: `18%` , transition:'left 1s'})
        
    }
    else{
        $('.navbar').css({left:`-${navWidth}px`, transition:'left 1s'})
        $('span').css({left: `0px` , transition:'left 1s'})
       
    }

});


$(document).ready(function(){
$('div:Singer one').css('display','block')
$('h3').click(function(){
$(this).next().slideToggle(500)

})


});



let countDownDate= new Date("Nov 25, 2024 23:59:59").getTime();
let counter = setInterval(() => {
let dateNow =new Date().getTime();
let dateDiff =countDownDate - dateNow;
let days =Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours=Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 *60 ));
let minutes=Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60 ));
let seconds=Math.floor((dateDiff % (1000 * 60)) / 1000);
// console.log(days);
document.querySelector(".days").innerHTML=days;
document.querySelector(".hours").innerHTML=hours;
document.querySelector(".minutes").innerHTML=minutes;
document.querySelector(".seconds").innerHTML=seconds;

if(dateDiff < 0){
    clearInterval(counter)
}
},1000);