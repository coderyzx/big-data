export default {
  'GET /api/query/chart': {
    code: 'U000001',
    data: {
      chartlist: [
        {
          id: 'chart-type-line',
          key: '1',
          iconType: 'pie-chart',
          chartName: '折线图',
          path: '/charts',
        },
        {
          id: 'chart-type-bar',
          key: '2',
          iconType: 'pie-chart',
          chartName: '柱状图',
          path: '/charts/chart-type-bar',
        },
        {
          id: 'chart-type-pie',
          key: '3',
          iconType: 'pie-chart',
          chartName: '饼图',
          path: '/charts/chart-type-pie',
        },
      ],
    },
  },
}
