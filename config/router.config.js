/**
 * component 指向的路由组件文件是从 src/pages 目录开始解析的
 */
const routes = [
  {
    path: '/login',
    component: '../pages/login',
  },
  {
    path: '/',
    component: '../layouts/home',
    routes: [
      {
        path: '/',
        component: './wellcome',
      },
      {
        path: '/dashBoard',
        component: './dashBoard',
      },
      {
        path: '/tempLibrary',
        component: './tempLibrary',
        routes: [
          {
            path: '/tempLibrary/chart',
            component: './tempLibrary/chart',
            routes: [
              {
                path: '/tempLibrary/chart/line',
                component: './tempLibrary/chart/lineChart',
              },
              {
                path: '/tempLibrary/chart/bar',
                component: './tempLibrary/chart/barChart',
              },
              {
                path: '/tempLibrary/chart/pie',
                component: './tempLibrary/chart/pieChart',
              },
              {
                path: '/tempLibrary/chart/radar',
                component: './tempLibrary/chart/radarChart',
              },
            ],
          },
          {
            path: '/tempLibrary/type',
            component: './tempLibrary/type',
          },
          {
            path: '/tempLibrary/toolBar',
            component: './tempLibrary/toolBar',
          },
          {
            path: '/tempLibrary/largeScreen',
            component: './tempLibrary/largeScreen',
          },
        ],
      },
      {
        path: '/editor',
        component: './editor',
      },
      // 大数据接入
      {
        path: '/dataAccess',
        component: './dataAccess',
      },
      {
        path: '/sysManage',
        component: './sysManage',
      },   
    ],

  },
  {
    component: './404',
  },

]

export default routes;

