export default function (performance) {
  const timing = performance.timing
  const result = {
    points: ['redirectTime', 'appCacheTime', 'domainLookupTime', 'connectTime', 'requestTime', 'responseTime', 'initDomTreeTime', 'domReadyTime', 'loadEventTime'],
    times: {},
    descs: {}
  }

  // docs: https://www.w3.org/TR/navigation-timing/
  // Time spent during redirection
  result.times.redirectTime = timing.redirectEnd - timing.redirectStart
  // AppCache
  result.times.appCacheTime = timing.domainLookupStart - timing.fetchStart
  // DNS query time
  result.times.domainLookupTime = timing.domainLookupEnd - timing.domainLookupStart
  // TCP connection time
  result.times.connectTime = timing.connectEnd - timing.connectStart
  // Time to first byte
  result.times.requestTime = timing.responseStart - timing.requestStart
  // Server response time
  result.times.responseTime = timing.responseEnd - timing.responseStart
  // Request to completion of the DOM loading
  result.times.initDomTreeTime = timing.domInteractive - timing.responseEnd
  // Time spent constructing the DOM tree
  result.times.domReadyTime = timing.domComplete - timing.domInteractive
  // Load event time
  result.times.loadEventTime = timing.loadEventEnd - timing.loadEventStart

  // Total time from start to load
  result.times.totalTime = timing.loadEventEnd - timing.navigationStart
  // Time spent unloading documents
  result.times.unloadEventTime = timing.unloadEventEnd - timing.unloadEventStart

  console.log(result)

  return result
}
