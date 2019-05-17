<template>
  <div id="canvas">
    <p> sdfas  sd</p>
    <p>sdfa</p>
    <p>asdfa</p>
    <p>asdfsaf</p>
    <p>fdsafd</p>
    <p> sdfas  sd</p>
    <p> sdfas  sd</p>
    <p>sdfa</p>
    <p>asdfa</p>
    <p>asdfsaf</p>
    <p>fdsafd</p>
    <p> sdfas  sd</p><p> sdfas  sd</p>
    <p>sdfa</p>
    <p>asdfa</p>
    <p>asdfsaf</p>
    <p>fdsafd</p>
    <p> sdfas  sd</p><p> sdfas  sd</p>
    <p>sdfa</p>
    <p>asdfa</p>
    <p>asdfsaf</p>
    <p>fdsafd</p>
    <p> sdfas  sd</p><p> sdfas  sd</p>
    <p>sdfa</p>
    <p>asdfa</p>
    <p>asdfsaf</p>
    <p>fdsafd</p>
    <p> sdfas  sd</p>
    <vue-draggable-resizable :w="width"
                             :h="height"
                             @dragging="onDrag"
                             @resizing="onResize"
                             :parent="true"
                             :snap="true"
                             class="dom"
    >
      <!--<p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>-->
        <!--X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>-->
      <!--<div id="myChart" class="chart" :style="{width: '300px', height: '300px'}"></div>-->
      <div class="chart" id="myChart" :style="{width: '600px', height: '600px'}" ref="chart"></div>
    </vue-draggable-resizable>
    <!--<vue-draggable-resizable :w="width"-->
                             <!--:h="height"-->
                             <!--@dragging="onDrag"-->
                             <!--@resizing="onResize"-->
                             <!--:parent="true"-->
                             <!--:snap="true"-->
                             <!--class="dom"-->
    <!--&gt;-->
      <!--<div class="chart" id="myChart2" :style="{width: '300px', height: '300px'}" ref="chart"></div>-->
    <!--</vue-draggable-resizable>-->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      width: 600,
      height: 600,
      x: 0,
      y: 0,
      myChart: ''
    }
  },
  computed: {
    style: function () {
      return 'width:' + this.width + 'px; height:' + this.height + 'px'
    }
  },
  mounted () {
    this.drawLine()
    // this.drawLine(this.myChart2, 'myChart2')
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      this.myChart.setOption({
        title: {
          text: '在Vue中使用echarts',
          textAlign: 'left'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
        // grid: {
        //   x: this.x,
        //   y: this.y,
        //   x2: this.x + this.width,
        //   y2: this.y + this.height
        // }
      })
    },
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.$refs.chart.style = this.style
      // var dom = document.getElementById('panel')
      // dom.innerHTML = '<div class="chart" id="myChart" style="' + this.style + '"></div>'
      this.myChart.resize()
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
      console.log('Dragging...')
    }
  }
  // watch()
}
</script>

<style scoped>
  .chart {
  }
  .dom {
  }
  canvas {
    height: 800px;
    width: 800px;
  }
</style>
