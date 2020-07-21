/* jshint esversion: 6 */
/*
 * @Description: 开发平台路由
 * @version: 0.1.0.2020.0228_alpha
 * @Author: 李鑫（lixin758@jd.com）
 * @Date: 2020-02-25 14:39:45
 * @LastEditors: 李鑫（lixin758@jd.com）
 * @LastEditTime: 2020-02-25 14:40:17
 * @FilePath: \api-gateway-web\src\router\routers\develop.js
 */
export default {
  path: '/second',
  component: () => import('@/views/second/index'),
  children: [
    {
      path: '/',
      name: 'second',
      component: () => import('@/views/second/pages/A'),
      meta: {
        activeItem: '/second'
      }
    }
  ],
  meta: {
    meta: {
      activeItem: '/second'
    }
  }
};
