/**
 * 目标：基于CommonJS规范，导入属性和方法，并使用
 */

// 导入属性和方法
const obj = require('./utils.js');
console.log(obj);

const result = obj.arraySum([1,2,3,4]);
console.log(result);

