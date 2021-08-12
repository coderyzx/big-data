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
        path: '/library',
        component: './library',
        routes: [
          {
            path: '/library/component',
            component: './library/component',
            routes: [
              {
                path: '/library/component/line',
                component: './library/component/lineChart',
              },
              {
                path: '/library/component/bar',
                component: './library/component/barChart',
              },
              {
                path: '/library/component/pie',
                component: './library/component/pieChart',
              },
            ],
          },
          {
            path: '/library/type',
            component: './library/type',
          },
          {
            path: '/library/filter',
            component: './library/filter',
          },
          {
            path: '/library/text',
            component: './library/text',
          },
          {
            path: '/library/photo',
            component: './library/photo',
          },
        ],
      },
      {
        path: '/editor',
        component: './editor',
        routes:[
          {
            path: '/editor/:id',
            component: './editor/editorChart',
          },
        ],
      },
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

