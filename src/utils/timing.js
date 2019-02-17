export default function (performance) {
  const timing = performance.timing
  const result = {
    points: ['redirect', 'appCache', 'DNS', 'TCP', 'request', 'response', 'processing', 'onload'],
    calcs: {
      redirect: ['redirectStart', 'redirectEnd'],
      appCache: ['fetchStart', 'domainLookupStart'],
      DNS: ['domainLookupStart', 'domainLookupEnd'],
      TCP: ['connectStart', 'connectEnd'],
      request: ['requestStart', 'responseStart'],
      response: ['responseStart', 'responseEnd'],
      processing: ['responseEnd', 'domComplete'],
      onload: ['loadEventStart', 'loadEventEnd'],

      total: ['navigationStart', 'loadEventEnd'],
      unload: ['unloadEventStart', 'unloadEventEnd']
    },
    fills: {
      redirect: '#ffff60',
      appCache: '#1f831f',
      DNS: '#1f7c83',
      TCP: '#e58226',
      request: '#1fe11f',
      response: '#1977cc',
      processing: '#9cc',
      onload: '#c0c0ff',
      total: '#188fff',
      unload: '#cdcdcd'
    },
    times: {},
    descs: {}
  }

  for (let point in result.calcs) {
    const calc = result.calcs[point]
    result.times[point] = timing[calc[1]] - timing[calc[0]]
    result.descs[point] = `${calc[1]} - ${calc[0]}`
  }

  console.log(result)

  return result
}
