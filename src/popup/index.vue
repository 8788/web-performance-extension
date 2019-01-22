<template>
  <div id="app">
    <Pie :performance="performance"></Pie>
  </div>
</template>

<script>
import Pie from '../components/Pie'

export default {
  data () {
    return {
      performance: {}
    }
  },
  components: {
    Pie
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
    width: 400px;
  }
</style>
