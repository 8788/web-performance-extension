<template>
  <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
    <v-tooltip :showTitle="false" dataKey="item * percent" />
    <v-axis />
    <v-pie position="percent" color="item" :v-style="pieStyle" :label="labelConfig" />
    <v-coord type="theta" />
  </v-chart>
</template>

<script>
import DataSet from '@antv/data-set'
import timing from '../utils/timing.js'

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}]

export default {
  data () {
    return {
      data: [],
      scale,
      height: 400,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      labelConfig: ['percent', {
        formatter: (val, item) => {
          return item.point.item + ': ' + item.point.time
        }
      }]
    }
  },
  props: ['performance'],
  watch: {
    performance (val, oldVal) {
      this.data = this.transformPie(timing(this.performance))
    }
  },
  methods: {
    transformPie (obj) {
      const sourceData = []

      obj.points.forEach(item => {
        sourceData.push({
          item: item,
          time: obj.times[item],
          count: parseInt((obj.times[item] / obj.times.totalTime * 100).toFixed(0), 10)
        })
      })

      const dv = new DataSet.View().source(sourceData)
      dv.transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      })
      return dv.rows
    }
  }
}
</script>

<style>
</style>
