/**
 * component 指向的路由组件文件是从 src/pages 目录开始解析的
 */
const routes = [
  {
    path: '/login',
    component: '../pages/Login',
  },
  {
    path: '/',
    // 鉴权 有坑 鉴权下级一定要component
    wrappers: [
      './Authorized',
    ],
    component: '../layouts/home',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: '../layouts/home',
      },
      {
        component: '../pages/404',
      },
    ],

  },

  {
    path: '/charts',
    component: '../layouts/charts',
  },
  {
    path: '/mirror',
    component: '../layouts/mirror',
  },

]

export default routes;

