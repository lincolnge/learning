import Vue from 'vue';
import Router from 'vue-router';

// 路由按需加载。
// import HelloWorld from '@/components/HelloWorld';
// import ElementPage from '@/components/ElementPage';
const HelloWorld = () => import('@/components/HelloWorld');
const ElementPage = () => import('@/components/ElementPage');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/element',
      name: 'Element',
      component: ElementPage,
    },
  ],
});
