import request from '@/utils/request';

export async function getLogin(username, password) {
  // console.log(username, password);
  return request(`/api/query/login?username=${username}&password=${password}`, {
      method: 'get',
      username,
      password,
  });
}
export async function getChartMenu(payload) {
  return request('/api/query/chartMenu', {
      method: 'get',
      payload,
  });
}
export async function getChartList(payload) {
  // console.log(payload);
  return request('/api/query/chartList', {
      method: 'get',
      payload,
  });
}
