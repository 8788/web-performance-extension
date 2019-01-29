<template>
  <div id="app">
    <Bar :performance="performance"></Bar>
  </div>
</template>

<script>
import Bar from '../../components/Bar'

export default {
  data () {
    return {
      performance: {}
    }
  },
  components: {
    Bar
  },
  created () {
    const that = this
    window.addEventListener('load', function load (event) {
      window.removeEventListener('load', load, false)
      chrome.tabs.executeScript({ file: 'js/execute.js' }, arr => {
        that.performance = arr[0]
      })
    }, false)
  }
}
</script>

<style>
  #app {
    width: 480px;
  }
</style>
