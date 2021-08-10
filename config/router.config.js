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
    component: '../layouts/home',
    routes: [
      {
        path: '/',
        component: '../pages/Wellcome',
      },
      {
        path: '/charts',
        component: '../pages/charts',
        routes: [
          {
            path: '/charts',
            component: '../pages/charts/LineChart',
          },
          {
            path: '/charts/chart-type-bar',
            component: '../pages/charts/BarChart',
          },
        ],
      },
    ],

  },
  {
    component: '../pages/404',
  },

]

export default routes;

