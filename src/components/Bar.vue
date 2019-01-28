<template>
  <div class="total">
    <Progress width="30"></Progress>
    <Progress width="50" fill-color="#f00"></Progress>
  </div>
</template>

<script>
import Progress from './Progress'
import timing from '../utils/timing.js'

export default {
  data () {
    return {
      options: {}
    }
  },
  props: ['performance'],
  watch: {
    performance (val, oldVal) {
      this.options = this.transformPie(timing(this.performance))
    }
  },
  components: {
    Progress
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
  .total {
    display: flex;
    height: 10px;
  }
</style>
