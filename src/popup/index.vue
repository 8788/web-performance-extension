<template>
  <div id="app">
    popup
  </div>
</template>

<script>
import timing from '../utils/timing.js'

export default {
  data () {
    return {
      performance: {}
    }
  },
  created () {
    const that = this
    window.addEventListener('load', function load (event) {
      window.removeEventListener('load', load, false)
      chrome.tabs.executeScript({ file: 'js/execute.js' }, arr => {
        that.performance = timing(arr[0])
      })
    }, false)
  }
}
</script>

<style>
</style>
