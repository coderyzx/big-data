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
        component: './Wellcome',
      },
      {
        path: '/charts',
        component: './charts',
        routes: [
          {
            path: '/charts',
            component: './charts/LineChart',
          },
          {
            path: '/charts/chart-type-bar',
            component: './charts/BarChart',
          },
          {
            path: '/charts/chart-type-pie',
            component: './charts/PieChart',
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

