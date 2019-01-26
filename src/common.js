/**
 * 深拷贝
 * @param {any} source
 */
const deepClone = function deepClone(source) {
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone');
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
};

/**
 * 深赋值（根据o1中存在的key赋值）
 * @param {Object} o1
 * @param {Object} o2
 */
const objectDeepSet = function objectDeepSet(o1 = {}, o2 = {}) {
  for (let key in o1) {
    if (o1.hasOwnProperty(key) && o2.hasOwnProperty(key)) {
      if (o1[key] instanceof Array && o2[key] instanceof Array) {
        let length = (o1[key].length < o2[key].length ? o1[key].length : o2[key].length) || 0;
        for (let i = 0; i < length; i++) {
          if (typeof o1[key][i] !== 'object' && typeof o2[key][i] !== 'object') {
            o1[key][i] = o2[key][i];
          } else {
            objectDeepSet(o1[key][i], o2[key][i]);
          }
        }
      } else if (o1[key] instanceof Date && o2[key] instanceof Date) {
        o1[key] = new Date(o2[key].getTime());
      } else if (typeof o1[key] === 'object' && typeof o2[key] === 'object') {
        objectDeepSet(o1[key], o2[key]);
      } else {
        o1[key] = o2[key];
      }
    }
  }
  return o1;
};

/**
 * 获取字符串中第一个连续的数字串且兼容负数
 * @param {String} str
 * @return {Number}
 */
const getNumber = function getNumber(str) {
  if (typeof str === 'string') {
    const arr = str.match(/[-|0-9][0-9]*/);
    return arr && arr[0] ? parseInt(arr[0], 10) : 0;
  } else {
    return str;
  }
};

/**
 * 根据path（支持可访问属性对象、类对象、数组、类数组）获取value
 * @param {Object} obj
 * @param {String} path
 * @return {any}
 */
const getValueByPath = function getValueByPath(obj, path) {
  if (path.indexOf('.') !== -1) {
    let propArr = path.split('.');
    let lastProp = propArr.pop();
    for (let i = 0; i < propArr.length; i++) {
      if (!obj) return;
      obj = obj[propArr[i]];
    }
    return obj[lastProp];
  } else {
    return obj[path];
  }
};

/**
 * 生成从object中取出指定path的值的方法
 * @param {String} path
 * @return {Function}
 */
const bailRE = /[^\w.$]/;
const parsePath = function parsePath(path) {
  if (bailRE.test(path)) return;
  const segments = path.split('.');
  return function(obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
};

module.exports = {
  deepClone,
  objectDeepSet,
  parsePath,
  getValueByPath,
  getNumber
};
