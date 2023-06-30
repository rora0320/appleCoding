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

console.log(this);
const object = {
    data:{
        functions:()=>{
            console.log(this);
            // -> this 상위요소가 가진 this를 가져옴
        }
        // functions:function(){
        //     console.log(this); //-> window
        // }
    }
}
object.data.functions();

// 3. constructor
function 기계 (){
    this.name = 'kim';
}

var object = new 기계();
//기계 함수에서 새로운 오브젝트 생성 : constructor (생성자)
