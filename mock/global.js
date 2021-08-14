// 从后端读取二级目录如图表类型管理，组件列表的子菜单名称，显示在左侧菜单栏
export default {
  'GET /api/query/chartMenu': {
    code: '000',
    data: {
      chartMenu: [
        {
          id: '1',
          icon: 'line-chart',
          name: '折线图',
          path: 'lineChart',
          des: '',
          parentId: 'sub1',
          time: '',
          creatBy: '',
          child: [],
        },
        {
          id: '2',
          icon: 'pie-chart',
          name: '饼图',
          path: 'pieChart',
          des: '',
          parentId: 'sub1',
          time: '',
          creatBy: '',
          child: [],
        },
        {
          id: '3',
          name: '雷达图',
          path: 'radarChart',
          icon: 'radar-chart',
          des: '',
          parentId: 'sub1',
          time: '',
          creatBy: '',
          child: [],
        },
        {
          id: '4',
          name: '柱状图',
          path: 'barChart',
          icon: 'bar-chart',
          des: '',
          parentId: 'sub1',
          time: '',
          creatBy: '',
          child: [],
        },
      ],
    },
  },
}
