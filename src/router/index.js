/* jshint esversion: 6 */
/*
 * @Description: vue router
 * @version: 1.0.0.20200225_beta
 * @Author: 李鑫（lixin758@jd.com）
 * @Date: 2020-02-24 19:26:21
 * @LastEditors: 李鑫（lixin758@jd.com）
 * @LastEditTime: 2020-02-25 14:05:45
 * @FilePath: \api-gateway-web\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import values from 'lodash/values';
import RoutesMapConfig from './routers/index';
import beforeEachRouters from './before_router';
import afterEachRouters from './after_router';

Vue.use(Router);
const commonRoutesMap = [
  // {
  //   path: '/',
  //   redirect: '/develop',
  // },
  {
    path: '/',
    redirect: '/first'
    // name: 'home',
    // component: () => import('@/views/service'),
    // meta: {
    //   activeItem: '/service',
    // },
  },
  {
    path: '*',
    redirect: '/'
  }
];

const BASE_URL = '';

const routerInstance = new Router({
  mode: 'history',
  base: BASE_URL,
  routes: RoutesMapConfig.concat(commonRoutesMap)
});

values(beforeEachRouters).forEach(hook => {
  routerInstance.beforeEach(hook);
});

values(afterEachRouters).forEach(hook => {
  routerInstance.afterEach(hook);
});

export default routerInstance;
