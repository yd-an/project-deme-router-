/* jshint esversion: 6 */
/*
 * @Description:
 * @version:
 * @Author: 李鑫（lixin758@jd.com）
 * @Date: 2020-02-25 14:05:41
 * @LastEditors: 李鑫（lixin758@jd.com）
 * @LastEditTime: 2020-02-25 14:05:42
 * @FilePath: \api-gateway-web\src\router\routers\index.js
 */
const files = require.context('.', true, /\.js$/);
const modules = [];

files.keys().forEach(key => {
  if (key === './index.js') return;
  const routerModule = files(key).default;
  if (Array.isArray(routerModule)) {
    modules.push(...routerModule);
  } else {
    modules.push(routerModule);
  }
});
console.log(modules);
export default modules;
