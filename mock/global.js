// 从后端读取二级目录如图表类型管理，组件列表的子菜单名称，显示在左侧菜单栏
export default {
  'GET /api/query/chartMenu': {
    code: '000',
    data: {
      chartMenu: [
        {
          iconType: 'area-chart',
          subkey: 'sub1',
          listName: '图表组件列表',
          child: [
            {
              key: '1',
              listName: '折线图',
              path: '/templateLib',
              iconType: 'line-chart',
            },
            {
              key: '2',
              listName: '饼图',
              path: '/templateLib/chart/pie',
              iconType: 'pie-chart',
            },
            {
              key: '3',
              listName: '雷达图',
              path: '/templateLib/chart/radar',
              iconType: 'radar-chart',
            },
            {
              key: '4',
              listName: '柱状图',
              path: '/templateLib/chart/bar',
              iconType: 'bar-chart',
            },
          ],
        },
        {
          subkey: 'sub2',
          iconType: 'form',
          listName: '图表类型列表',
          child: [
            {
              key: '5',
              listName: '类型1',
              path: '/templateLib/chartType',
              iconType: 'line-chart',
            },
            {
              key: '6',
              listName: '类型2',
              path: '/templateLib/chartType',
              iconType: 'pie-chart',
            },
            {
              key: '7',
              listName: '类型3',
              path: '/templateLib/chartType',
              iconType: 'radar-chart',
            },
            {
              key: '8',
              listName: '类型4',
              path: '/templateLib/chartType',
              iconType: 'bar-chart',
            },
          ],
        },
        {
          subkey: 'sub3',
          iconType: 'tool',
          path: '/templateLib/toolBar',
          listName: '工具栏列表',
          child: [],
        },
        {
          subkey: 'sub4',
          iconType: 'desktop',
          path: '/templateLib/largeScreen',
          listName: '大屏配置',
          child: [],
        },
      ],
    },
  },
}
