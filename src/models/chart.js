import { getChart } from '@/services/global';
// import { getMenuMapArrData } from '@/utils/chartMenu';

const chartModel = {
  namespace: 'chartModel',
  state: {
   chartList: [],
  },
  effects: {
    *getChart({ payload }, { call, put }) {
      const response = yield call(getChart, payload);
      // console.log(response);
      if (response.code === 'U000001') {
        yield put({
          type: 'chart',
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    chart(state, { payload }) {
      // console.log(payload);
      return {
        ...state,
        chartList: payload.chartlist,
      }
    },

  },
};

export default chartModel;
