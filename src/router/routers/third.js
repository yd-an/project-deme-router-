/* jshint esversion: 6 */
/*
 * @Description: 平台管理路由
 * @version:
 * @Author: 李鑫（lixin758@jd.com）
 * @Date: 2020-02-28 14:32:01
 * @LastEditors: 李鑫（lixin758@jd.com）
 * @LastEditTime: 2020-02-28 14:32:47
 * @FilePath: \api-gateway-web\src\router\routers\service.js
 */
export default {
  path: '/third',
  component: () => import('@/views/third/index'),
  children: [
    {
      path: '/',
      name: 'third',
      component: () => import('@/views/third/pages/A'),
      meta: {
        activeItem: '/third/index'
      }
    }
  ]
};
