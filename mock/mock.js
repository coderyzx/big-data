import mockjs from 'mockjs';

export default {
  'POST /api/query/mockdemoList': mockjs.mock({
    code: 'U000000',
    data: {
      'rows|100': [
        {
          'id|+1': 0,
          name: '@city',
          'value|1-100': 50,
          'type|0-2': 1,
        }],
    },
  }),
  'GET /api/query/tableDemoList': mockjs.mock({
    code: 'U000000',
    data: {
      total: 100,
      'rows|100': [
        {
          'key|+1': 0,
          date: '2018-01-01',
          'amount|1-100': 50,
          'type|0-2': 1,
          'note|1-100': 50,
        }],
    },
  }),
  'GET /api/query/login': mockjs.mock({
    code: 'U000000',
    data: {
      success: true,
      data: true,
      username: '123',
      password: '123',
    },
  }),
};
