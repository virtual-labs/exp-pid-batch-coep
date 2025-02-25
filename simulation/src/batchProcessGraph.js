function batchProcessGraph(dataJson, i) {
    let currentIndex = 0;
		var CheckBoxData='CheckBox'+i;
  	var htm=''
//       +' <h2 class="text-center text-light mb-4">Batch Process Graph</h2>'
       +' <div class="row" id="graphDiv">'
       +'     <div class="col-md-12 text-center" id='+CheckBoxData+'>'
       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="0" checked> <b>TEMP</b></label>'
       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="1" checked><b> CV1</b></label>'
       +'         <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="2" checked><b> CV2</b></label>'
       +'     </div>'
       +' </div>';
  
$("#"+CheckBoxData).html(htm);

    const GraphData = 'sensorGraphCold'+i;

    // Extract all values for min calculation
    const allValues = dataJson.flatMap(obj => [obj.temp, obj.cv1, obj.cv2])
        .filter(value => value !== undefined && value !== null);

    const minValueY = Math.min(...allValues);

    // Initialize Highcharts
  
    var chart = Highcharts.chart(GraphData, {
        chart: {
            type: 'line',
            backgroundColor: '#222222',
            animation: true,
            marginRight: 10
        },
        title: {
            text: 'BATCH PROCESS GRAPH',
            style: { color: '#ffffff', fontSize: '20px' }
        },
        xAxis: {
            type: 'linear',
            title: { text: 'TIME', style: { color: '#ffffff' } },
            gridLineColor: '#444444',
            labels: { style: { color: '#ffffff' } }
        },
        yAxis: {
            title: { text: 'READINGS', style: { color: '#ffffff' } },
            min: minValueY,
            gridLineColor: '#444444',
            labels: { style: { color: '#ffffff' } }
        },
        legend: {
            enabled: true,
            itemStyle: { color: '#ffffff' },
            itemHoverStyle: { color: '#dddddd' }
        },
        tooltip: {
            shared: true,
            backgroundColor: 'rgba(0,0,0,0.75)',
            style: { color: '#ffffff' },
            valueDecimals: 3
        },
        series: [
            { name: 'TEMP', data: [], color: '#FF5733' },
            { name: 'CV1', data: [], color: '#33FF57' },
            { name: 'CV2', data: [], color: '#3357FF' }
        ],
        credits: { enabled: false }
    });

    // Dynamically update chart with data
    let interval = setInterval(() => {
        if (currentIndex < dataJson.length) {
            let currentTime = dataJson[currentIndex].time;
            let temp = dataJson[currentIndex].temp;
            let cv1 = dataJson[currentIndex].cv1;
            let cv2 = dataJson[currentIndex].cv2;

            chart.series[0].addPoint([currentTime, temp], true, false);
            chart.series[1].addPoint([currentTime, cv1], true, false);
            chart.series[2].addPoint([currentTime, cv2], true, false);

            currentIndex++;
        } else {
            clearInterval(interval);
            $("#download,#checkDiv").prop("hidden", false);
        }
    }, 1000);

    // Toggle series visibility
    document.querySelectorAll('.series-toggle').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const seriesIndex = parseInt(this.dataset.series);
            const series = chart.series[seriesIndex];
            this.checked ? series.show() : series.hide();
        });
    });

    // Screenshot functionality
    $('#download').on('click', function () {
        html2canvas(document.querySelector("#marketChart")).then(canvas => {
            document.body.appendChild(canvas);
            $("canvas").css("display", "none");
            var link = document.createElement('a');
            link.download = 'SprayDryerGraph.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    });
}
