//export单个抛出
// export let rname = 'zjj';
// export function fn(){
//     console.log('hello world');
// }
// export多个抛出
let rname = 'zjj';
function fn(){
    console.log('hello');
}
export{rname,fn};
//默认抛出
// export default {
//     rname: 'zjj',
//     sex: function fn(){
//         console.log('i am man');
//     }
// }
//解构赋值模块
// let rname = 'zjj';
// function Judgesex(){
//     console.log('i am man');
// }
// export{rname,Judgesex};