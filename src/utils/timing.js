export default function (performance) {
  const result = {}
  const timing = performance.timing

  // Total time from start to load
  result.totalTime = timing.loadEventEnd - timing.navigationStart
  // Time spent constructing the DOM tree
  result.domReadyTime = timing.domComplete - timing.domInteractive
  // Time consumed preparing the new page
  result.readyStart = timing.fetchStart - timing.navigationStart
  // Time spent during redirection
  result.redirectTime = timing.redirectEnd - timing.redirectStart
  // AppCache
  result.appcacheTime = timing.domainLookupStart - timing.fetchStart
  // Time spent unloading documents
  result.unloadEventTime = timing.unloadEventEnd - timing.unloadEventStart
  // DNS query time
  result.lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart
  // TCP connection time
  result.connectTime = timing.connectEnd - timing.connectStart
  // Time spent during the request
  result.requestTime = timing.responseEnd - timing.requestStart
  // Request to completion of the DOM loading
  result.initDomTreeTime = timing.domInteractive - timing.responseEnd
  // Load event time
  result.loadEventTime = timing.loadEventEnd - timing.loadEventStart

  return result
}
