/*
 * 目标：基于ES6标准，封装属性和方法，并导出
 */


const baseURL = 'http://hmajax.itheima.net';
const getArraySum = arr=>arr.reduce((sum,item)=>sum+item,0);

// 导出属性和方法
export default {
    url: baseURL,
    arraySum: getArraySum
}