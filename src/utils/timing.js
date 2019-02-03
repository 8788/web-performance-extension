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
    times: {},
    descs: {}
  }

  for (let point in result.calcs) {
    const calc = result.calcs[point]
    result.times[point] = timing[calc[1]] - timing[calc[0]]
    result.descs[point] = `performance.timing.${calc[1]} - performance.timing.${calc[0]}`
  }

  console.log(result)

  return result
}
