/**
* 
* 问题：业务需求中，经常有 只需要请求一次，以防止用户重复点击行为导致的触发重复请求
 传递 请求方法（执行后返回promise），返回一个新方法。
 连续触发时，只执行一次
 // 示例
 let count = 1;
 let promiseFunction = () =>
   new Promise(rs =>
     window.setTimeout(() => {
       rs(count++);
     })
   );
 let firstFn = firstPromise(promiseFunction);
 firstFn().then(console.log); // 1
 firstFn().then(console.log); // 1
 firstFn().then(console.log); // 1
*/

function firstPromise(promiseFunction) {
  let p = null;
  return function (...args) {
    return p
      ? p
      : (p = promiseFunction.apply(this, args).finally(() => (p = null)));
  };
}

let count = 1;
let promiseFunction = () =>
  new Promise((rs) =>
    setTimeout(() => {
      rs(count++);
    }, 1000)
  );
let firstFn = firstPromise(promiseFunction);
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1

setTimeout(() => {
  firstFn().then(console.log); // 2
  firstFn().then(console.log); // 2
  firstFn().then(console.log); // 2
}, 3000);