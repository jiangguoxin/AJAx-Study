/*
 * 目标：基于CommonJS规范，封装属性和方法，并导出
 */
const baseURL = 'http://hmajax.itheima.net';
const getArraySum = arr=>arr.reduce((sum,item)=>sum+item,0);

// 导出属性和方法
module.exports = {
    url: baseURL,
    arraySum: getArraySum
};