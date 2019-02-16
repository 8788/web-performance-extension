<template>
  <v-chart :forceFit="true" :padding="padding" :height="height" :data="data">
    <v-coord type="rect" direction="LB"></v-coord>
    <v-tooltip :showTitle="false"></v-tooltip>
    <v-legend></v-legend>
    <v-axis dataKey="profession"></v-axis>
    <v-interval position="profession*range" label="time" :color="color" :tooltip="tooltip"></v-interval>
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
      padding: [20, 80, 20, 80],
      color: ['fill', fill => fill],
      tooltip: ['profession*range', (profession, range) => {
        return {
          name: profession,
          value: range.join('-')
        }
      }]
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
          end: end,
          fill: obj.fills[item]
        })
      })

      // add total
      sourceData.unshift({
        profession: 'total',
        time: obj.times.total,
        start: 0,
        end: obj.times.total,
        fill: obj.fills.total
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
