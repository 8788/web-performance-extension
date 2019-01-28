<template>
  <div class="progress" :style="{width: width + 'px', height: height, background: bgColor}">
    <div class="progress-fill" :style="{width: percent + '%', background: fillColor}"></div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number,
      default: 10
    },
    percent: {
      type: Number,
      default: 100
    },
    bgColor: {
      type: String,
      default: '#ebeef5'
    },
    fillColor: {
      type: String,
      default: '#73bf76'
    }
  }
}
</script>

<style>
  .process {
    width: 100%;
  }
  .progress-fill {
    height: 100%;
  }
</style>
