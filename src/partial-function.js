/**
 * 通用柯里化函数
 * @param {Function} fn
 */
function curry(fn) {
  let args = [];
  function inner() {
    args = args.concat(Array.from(arguments));
    if (args.length > fn.length) {
      let argscopy = args.slice(0, fn.length);
      args = [];
      return fn.apply(this, argscopy);
    } else if (args.length === fn.length) {
      let argscopy = args.slice();
      args = [];
      return fn.apply(this, argscopy);
    } else {
      return inner;
    }
  }
  return inner;
}

/**
 * 如果参数为空，则返回所有入参的乘积
 */
const curryMulti = function curryMulti() {
  let nums = Array.from(arguments);
  if (nums.length === 0) return null;
  let result = 1;
  return (function inner() {
    let others = Array.from(arguments);
    if (others.length === 0) {
      return nums.reduce((acc, item) => acc * item, result);
    } else {
      nums = nums.concat(others);
      return inner;
    }
  })(...arguments);
};

module.exports = {
  curry,
  curryMulti
};
