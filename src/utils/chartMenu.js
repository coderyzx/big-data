export function getMenuMapArrData (datas = []) {
  const result = [];

  datas.forEach(ele => {
    const { id, key, iconType, chartName, path } = ele;
    result.push({
      id,
      key,
      iconType,
      chartName,
      path,
    })
  })
  // console.log('result', result);
  return result
}
