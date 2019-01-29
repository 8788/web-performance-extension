export default function (performance) {
  const timing = performance.timing
  const result = {
    points: ['redirect', 'appCache', 'DNS', 'TCP', 'request', 'response', 'processing', 'onload'],
    times: {},
    descs: {}
  }

  // docs: https://www.w3.org/TR/navigation-timing/
  // Time spent during redirection
  result.times.redirect = timing.redirectEnd - timing.redirectStart
  // AppCache
  result.times.appCache = timing.domainLookupStart - timing.fetchStart
  // DNS query time
  result.times.DNS = timing.domainLookupEnd - timing.domainLookupStart
  // TCP connection time
  result.times.TCP = timing.connectEnd - timing.connectStart
  // Time to first byte
  result.times.request = timing.responseStart - timing.requestStart
  // Server response time
  result.times.response = timing.responseEnd - timing.responseStart
  // Dom processing time
  result.times.processing = timing.domComplete - timing.responseEnd
  // Load event time
  result.times.onload = timing.loadEventEnd - timing.loadEventStart

  // Total time from start to load
  result.times.total = timing.loadEventEnd - timing.navigationStart
  // Time spent unloading documents
  result.times.unload = timing.unloadEventEnd - timing.unloadEventStart

  console.log(result)

  return result
}
