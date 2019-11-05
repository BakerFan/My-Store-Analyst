import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

Page({
  
  data: {
    ec: {
      onInit: function (canvas, width, height) {
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
            data: app.globalData.dateArray,
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
            data: app.globalData.date.text
          }, {
            name: 'B',
            type: 'line',
            smooth: true,
            data: [12, 50, 51, 35, 70, 30, 20]
          }, {
            name: 'C',
            type: 'line',
            smooth: true,
            data: [10, 30, 31, 50, 40, 20, 10]
          }]
        };

        chart.setOption(option);
        return chart;

      }
  }
  },

  onReady() {
  },

  onUnload() {
    app.globalData.dateArray = new Array();
  }
});