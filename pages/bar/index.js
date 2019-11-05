import * as echarts from '../../ec-canvas/echarts';

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '柱状图demo',
      left: 'center',
    },
    color: ["#37A2DA", "#67E0E3"], 
    tooltip: {},
    legend: {
      right: 20,
      top: 30,
      data: ['销量','库存']
    },
    xAxis: {
      data: ["衬衫", "帽", "外套", "裤", "鞋", "袜"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 21, 30, 5, 10, 8]
    },
      {
        name: '库存',
        type: 'bar',
        data: [10, 20, 30, 50, 100,80 ]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}
Page({

  data: {
    ec: {
      onInit: initChart
    }
  },
 
  onReady() {
  }
});

