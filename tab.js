// for(let i=0;i<$('.tab-button').length;i++) {
//     $('.tab-button').eq(i).on('click', function () {
//         // $('.tab-button').removeClass('orange');
//         // $('.tab-button').eq(i).addClass('orange');
//         // $('.tab-content').removeClass('show');
//         // $('.tab-content').eq(i).addClass('show');
//         tabOpen(i);
//         console.log('tab?');
//     })
// }
// 1.eventListener only use one
const dataset = {
    0:'products',
    1:'information',
    2:'shopping'
}
$('.list').click(function(e){
    const nodes = [...e.target.parentElement.children];
    const targetIndex =nodes.indexOf(e.target);
    tabOpen(targetIndex);
})
function tabOpen(index){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(index).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(index).addClass('show');
}