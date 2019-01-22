<template>
  <ve-pie :data="options" :legend-visible="false" :judge-width="true" :title="title"></ve-pie>
</template>

<script>
import timing from '../utils/timing.js'

export default {
  data () {
    return {
      title: {
        text: 'performance timing'
      },
      options: {}
    }
  },
  props: ['performance'],
  watch: {
    performance (val, oldVal) {
      this.options = this.transformPie(timing(this.performance))
    }
  },
  methods: {
    transformPie (obj) {
      const rows = []
      obj.points.forEach(point => {
        rows.push({ point: point, time: obj.times[point], desc: obj.descs[point] })
      })
      return {
        columns: ['point', 'time'],
        rows: rows
      }
    }
  }
}
</script>

<style>
</style>
