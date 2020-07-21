/* jshint esversion: 6 */
/*
 * @Description:
 * @version:
 * @Author: 晏丹(yandan8@jd.com)
 * @Date: 2020-02-28 14:40:16
 * @LastEditors: 晏丹(yandan8@jd.com)
 * @LastEditTime: 2020-02-28 14:40:16
 * @FilePath: \api-gateway-web\src\router\routers\service.js
 */
export default {
  path: '/first',
  component: () => import('@/views/first/index'),
  children: [
    {
      path: '/',
      name: 'first',
      component: () => import('@/views/first/pages/A'),
      meta: {
        activeItem: '/first'
      }
    }
  ]
};
