import { getChartMenu, getChartList } from '@/services/global';

const chartModel = {
  namespace: 'chartModel',
  state: {
    lineChart: {},
    barChart: {},
    pieChart: {},
    chartMenu: [],

  },
  effects: {
    *getChartMenu({ payload }, { call, put }) {
      const response = yield call(getChartMenu, payload);
      if (response.code === '000') {
        yield put({
          type: 'chartMenu',
          payload: response.data,
        });
      }
    },

    *getChartList({ payload }, { call, put }) {
      const response = yield call(getChartList, payload);
      // console.log(response);
      if (response.code === '001') {
        yield put({
          type: 'chartList',
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    chartList(state, { payload }) {
      return {
        ...state,
        lineChart: payload.lineChart,
        barChart: payload.barChart,
        pieChart: payload.pieChart,
      }
    },
    chartMenu(state, { payload }) {
      // console.log(payload);
      return {
        ...state,
        chartMenu: payload.chartMenu,
      }
    },

  },
};

export default chartModel;
