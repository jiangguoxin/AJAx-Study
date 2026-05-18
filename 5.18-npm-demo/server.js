/**
 * 目标：使用npm下载dayjs软件包格式化日期时间、
 * 初始化项目清单文件package.json，npm init -y
 * 下载软件包到当前项目，npm i dayjs(软件包名字)
 * 使用软件包
 */

// 使用
const dayjs = require('dayjs');
const nowDateStr = dayjs().format('YYYY-MM-DD HH:mm:ss');
console.log(nowDateStr);
