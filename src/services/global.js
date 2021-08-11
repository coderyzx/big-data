import request from '@/utils/request';

export async function getMenusList(params) {
  return request('/api/query/menus', {
      method: 'POST',
      params,
  });
}

export async function getLogin(username, password) {
  // console.log(username, password);
  return request(`/api/query/login?username=${username}&password=${password}`, {
      method: 'get',
      username,
      password,
  });
}
export async function getChart(payload) {
  // console.log(username, password);
  return request('/api/query/chart', {
      method: 'get',
      payload,
  });
}
