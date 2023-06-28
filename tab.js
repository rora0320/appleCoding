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
 //수업 내용
$('.list').click(function(e){
    const index=e.target.dataset.item
    console.log(e.target.dataset.item);
    tabOpen(index)
})
// $('.list').click(function(e){
//     const nodes = [...e.target.parentElement.children];
//     const targetIndex =nodes.indexOf(e.target);
//     tabOpen(targetIndex);
// })
function tabOpen(index){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(index).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(index).addClass('show');
}