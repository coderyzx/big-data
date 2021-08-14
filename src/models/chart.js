import { getChartMenu, getChartList } from '@/services/global';

const chartModel = {
  namespace: 'chartModel',
  state: {
    chartMenu: [],
    chartList: {},
    chartListName: '',
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        // console.log(location.query.id);
        if (location.pathname === '/templateLib/chart') {
          dispatch({
            type: 'chartListName',
            payload: location.query.id,
          });
        }
      })
    },
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
      // console.log(payload);
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
    chartListName(state, { payload }) {
      // console.log(payload);
      return {
        ...state,
        chartListName: payload,
      }
    },


  },
};

export default chartModel;
