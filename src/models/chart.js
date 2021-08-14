import { getChartMenu, getChartList } from '@/services/global';

const chartModel = {
  namespace: 'chartModel',
  state: {
    chartMenu: [],
    chartList: {},
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
      // console.log(typeof payload);
      const response = yield call(getChartList, payload);
      // console.log(response);
      if (response.code === '001') {
        // for(let i in response.data){
        //   // console.log(typeof i);
        //   if(i == payload){
        //     // console.log(i);
        //     yield put({
        //       type: 'chartList',
        //       payload: response.data.i ,
        //     });
        //   }
        // }
        yield put({
          type: 'chartList',
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    chartMenu(state, { payload }) {
      return {
        ...state,
        chartMenu: payload.chartMenu,
      }
    },
    chartList(state, { payload }) {
      // console.log(payload);
      return {
        ...state,
        chartList: payload,
      }
    },
  },
};

export default chartModel;
