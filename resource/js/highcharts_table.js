// JavaScript Document



$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'line',
                marginRight: 130,
                marginBottom: 45
            },
            title: {
                text: '一年级同学学习情况对照',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: topmath.com.cn',
                x: -20
            },
            xAxis: {
                categories: ['7/29','7/30','7/31','8/1', '8/2', '8/3', '8/4'],
				 title: {
                    text: '日期(月/日)'
                },
            },
            yAxis: {
                title: {
                    text: '学习成绩(分)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        '考试: '+'81'+'<br/>'+
						'练习：'+'78'+'<br/>'+
						'作业：'+'83';
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 60,
                borderWidth: 0
            },
            series: [{
                name: '学生1',
                data: [70,69,75,85,78,77,83]
            }, {
                name: '学生2',
                data: [72,68,69,65,68,71,79]
            }, {
                name: '学生3',
                data: [78,76,82,79,76,74,75]
            }, {
                name: '学生4',
                data: [79,80,82,80,87,85,86]
						}, {
                name: '学生5',
                data: [81,83,86,83,81,85,88]	
            },{
                name: '学生1',
                data: [60,70,69,75,85,78,77]
            }, {
                name: '学生2',
                data: [58,68,72,68,69,65,68]
            }, {
                name: '学生3',
                data: [78,56,78,76,82,0,76]
						}]
        });
    });
    
});