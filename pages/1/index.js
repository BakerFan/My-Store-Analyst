import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    title: {
      text: '折线图demo',
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      data: ['A', 'B', 'C'],
      top: 50,
      left: 'center',
      backgroundColor: 'yellow',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: app.globalData.datee.text
    }, {
      name: 'B',
      type: 'line',
      smooth: true,
      data: [12, 50, 36, 26, 70, 42, 20]
    }, {
      name: 'C',
      type: 'line',
      smooth: true,
      data: [10, 48, 31, 50, 40, 74, 20]
    }]
  };

  chart.setOption(option);
  return chart;

}

Page({

  data: {
    ec: {
      onInit: initChart
    },

    onReady() {
    }
  }
});