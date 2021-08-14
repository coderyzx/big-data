
export default {
  'GET /api/query/chartList': {
    code: '001',
    data: {
      lineChart: {
        name: '折线图',
        lineChartList: [
          {
            id: '1',
            option: {
              xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              yAxis: {
                  type: 'value',
              },
              series: [{
                  data: [150, 230, 224, 218, 135, 147, 260],
                  type: 'line',
              }],
            },
            title: '基础折线图',
          },
          {
            id: '2',
            option: {
              xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              yAxis: {
                  type: 'value',
              },
              series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line',
                  smooth: true,
              }],
            },
            title: '基础平滑折线图',
          },
          {
            id: '3',
            option: {
              tooltip: {
                  trigger: 'axis',
              },
              legend: {
                  data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true,
              },
              toolbox: {
                  feature: {
                      saveAsImage: {},
                  },
              },
              xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
              },
              yAxis: {
                  type: 'value',
              },
              series: [
                  {
                      name: '邮件营销',
                      type: 'line',
                      stack: '总量',
                      data: [120, 132, 101, 134, 90, 230, 210],
                  },
                  {
                      name: '联盟广告',
                      type: 'line',
                      stack: '总量',
                      data: [220, 182, 191, 234, 290, 330, 310],
                  },
                  {
                      name: '视频广告',
                      type: 'line',
                      stack: '总量',
                      data: [150, 232, 201, 154, 190, 330, 410],
                  },
                  {
                      name: '直接访问',
                      type: 'line',
                      stack: '总量',
                      data: [320, 332, 301, 334, 390, 330, 320],
                  },
                  {
                      name: '搜索引擎',
                      type: 'line',
                      stack: '总量',
                      data: [820, 932, 901, 934, 1290, 1330, 1320],
                  },
              ],
            },
            title: '折线堆叠图',
          },
          {
            id: '4',
            option: { tooltip: { trigger: 'axis', axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } } }, legend: { data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'] }, toolbox: { feature: { saveAsImage: {} } }, grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true }, xAxis: [{ type: 'category', boundaryGap: false, data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] }], yAxis: [{ type: 'value' }], series: [{ name: '邮件营销', type: 'line', stack: '总量', areaStyle: {}, emphasis: { focus: 'series' }, data: [120, 132, 101, 134, 90, 230, 210] }, { name: '联盟广告', type: 'line', stack: '总量', areaStyle: {}, emphasis: { focus: 'series' }, data: [220, 182, 191, 234, 290, 330, 310] }, { name: '视频广告', type: 'line', stack: '总量', areaStyle: {}, emphasis: { focus: 'series' }, data: [150, 232, 201, 154, 190, 330, 410] }, { name: '直接访问', type: 'line', stack: '总量', areaStyle: {}, emphasis: { focus: 'series' }, data: [320, 332, 301, 334, 390, 330, 320] }, { name: '搜索引擎', type: 'line', stack: '总量', label: { show: true, position: 'top' }, areaStyle: {}, emphasis: { focus: 'series' }, data: [820, 932, 901, 934, 1290, 1330, 1320] }] },
            title: '堆叠面积图',
          },
        ],
      },
      barChart: {
        name: '柱状图',
        barChartList: [
          {
            id: '1',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '带背景色的柱状图',
            subTitle: 'Bar with Background',
          },
          {
            id: '2',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '带背景色的柱状图',
            subTitle: 'Smoothed Line Chart',
          },
          {
            id: '3',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '带背景色的柱状图',
            subTitle: 'Large scale area chart',
          },
          {
            id: '4',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '带背景色的柱状图',
            subTitle: 'Large scale area chart',
          },
          {
            id: '5',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '带背景色的柱状图',
            subTitle: 'Large scale area chart',
          },
          {
            id: '6',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '带背景色的柱状图',
            subTitle: 'Large scale area chart',
          },
          {
            id: '7',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '带背景色的柱状图',
            subTitle: 'Large scale area chart',
          },
        ],
      },
      pieChart: {
        name: '饼图',
        pieChartList: [
          {
            id: '1',
            path: './pieChartList',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '基础南丁格尔玫瑰图',
            subTitle: "Nightingale's Rose Diagram",
          },
          {
            id: '2',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '基础南丁格尔玫瑰图',
            subTitle: 'Smoothed Line Chart',
          },
          {
            id: '3',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '基础南丁格尔玫瑰图',
            subTitle: 'Large scale area chart',
          },
          {
            id: '4',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '基础南丁格尔玫瑰图',
            subTitle: 'Large scale area chart',
          },
          {
            id: '5',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '基础南丁格尔玫瑰图',
            subTitle: 'Large scale area chart',
          },
          {
            id: '6',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '基础南丁格尔玫瑰图',
            subTitle: 'Large scale area chart',
          },
          {
            id: '7',
            path: './BasicLineChart',
            src: '',
            dataSrc: '',
            dataProcessed: true,
            title: '基础南丁格尔玫瑰图',
            subTitle: 'Large scale area chart',
          },
        ],
      },
    },
  },
}
