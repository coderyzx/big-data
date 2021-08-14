/**
 * component 指向的路由组件文件是从 src/pages 目录开始解析的
 */
const routes = [
  {
    path: '/login',
    component: './login',
  },
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        component: './wellcome',
      },
      {
        path: '/templateLib',
        component: './templateLib',
        routes: [
          {
            path: '/templateLib/chart/:id',
            component: './templateLib/chart',
            // routes: [
              //动态路由
              // {
              //   path: '/templateLib',
              //   component: './templateLib/chart/lineChart',
              // },
              // {
              //   path: '/templateLib/chart/bar',
              //   component: './templateLib/chart/barChart',
              // },
              // {
              //   path: '/templateLib/chart/pie',
              //   component: './templateLib/chart/pieChart',
              // },
              // {
              //   path: '/templateLib/chart/radar',
              //   component: './templateLib/chart/radarChart',
              // },
            // ],
          },
          {
            path: '/templateLib/chartType',
            component: './templateLib/chartType',
          },
          {
            path: '/templateLib/toolBar',
            component: './templateLib/toolBar',
          },
          {
            path: '/templateLib/largeScreen',
            component: './templateLib/largeScreen',
          },
        ],
      },
      {
        path: '/dashBoard',
        component: './dashBoard',
      },
      {
        path: '/editor/:id',
        component: './editor',
      },
      {
        path: '/metaData',
        component: './metaData',
      },
      {
        path: '/evaluReport',
        component: './evaluReport',
      },
      {
        path: '/dataProcessing',
        component: './dataProcessing',
      },   
    ],

  },
  {
    component: './404',
  },

]

export default routes;

