<template>
  <v-chart :forceFit="true" :padding="padding" :height="height" :data="data">
    <v-coord type="rect" direction="LB" />
    <v-tooltip />
    <v-legend />
    <v-axis dataKey="profession" :label="label" />
    <v-bar position="profession*range" />
    <v-interval position="profession*range" label="time" />
  </v-chart>
</template>

<script>
import DataSet from '@antv/data-set'
import timing from '../utils/timing.js'

export default {
  data () {
    return {
      data: [],
      height: 300,
      label: { offset: 12 },
      padding: [20, 80, 20, 80]
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
      const sourceData = []

      obj.points.forEach((item, index) => {
        const start = index === 0 ? 0 : sourceData[index - 1].end
        const end = start + obj.times[item]
        sourceData.push({
          profession: item,
          time: obj.times[item],
          start: start,
          end: end
        })
      })

      // add total
      sourceData.unshift({
        profession: 'total',
        time: obj.times.total,
        start: 0,
        end: obj.times.total
      })

      console.log(sourceData, obj)

      const dv = new DataSet.View().source(sourceData.reverse())
      dv.transform({
        type: 'map',
        callback (row) {
          row.range = [row.start, row.end]
          return row
        }
      })
      this.data = dv.rows
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
