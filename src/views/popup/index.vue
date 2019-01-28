<template>
  <div id="app">
    <Bar :performance="performance"></Bar>
    <Pie :performance="performance"></Pie>
  </div>
</template>

<script>
import Bar from '../../components/Bar'
import Pie from '../../components/Pie'

export default {
  data () {
    return {
      performance: {}
    }
  },
  components: {
    Bar,
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
    width: 480px;
  }
</style>
