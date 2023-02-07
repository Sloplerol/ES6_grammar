// import * as m from './55-fn.js'; //静态引入
const btn = document.querySelector('button');
btn.onclick = function(){
    // import动态函数返回结果为promise对象
    import('./55-fn.js').then(module=>{
        // 返回的成功结果
        module.fn();
    })
}
