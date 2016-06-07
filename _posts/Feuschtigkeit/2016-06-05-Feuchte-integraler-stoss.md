---
layout: posts
title: "Holzfeuchte am Logger beim integralen Stoß"
date: 2016-06-05
category: Feuchtigkeit
---
<div id="graph" style="width:90%;height:250px;">
    <script>
    var rawDataURL = 'https://raw.githubusercontent.com/plotly/datasets/master/2016-weather-data-seattle.csv';
    var xField = 'Date';
    var yField = 'Mean_TemperatureC';

    var selectorOptions = {
        buttons: [{
            step: 'month',
            stepmode: 'backward',
            count: 1,
            label: '1m'
        }, {
            step: 'month',
            stepmode: 'backward',
            count: 6,
            label: '6m'
        }, {
            step: 'year',
            stepmode: 'todate',
            count: 1,
            label: 'YTD'
        }, {
            step: 'year',
            stepmode: 'backward',
            count: 1,
            label: '1y'
        }, {
            step: 'all',
        }],
    };

    Plotly.d3.csv(rawDataURL, function(err, rawData) {
        if(err) throw err;

        var data = prepData(rawData);
        var layout = {
            title: 'Time series with range slider and selectors',
            xaxis: {
                rangeselector: selectorOptions,
                rangeslider: {}
            },
            yaxis: {
                fixedrange: true
            }
        };

        Plotly.plot('graph', data, layout);
    });

    function prepData(rawData) {
        var x = [];
        var y = [];

        rawData.forEach(function(datum, i) {

            x.push(new Date(datum[xField]));
            y.push(datum[yField]);
        });

        return [{
            mode: 'lines',
            x: x,
            y: y
        }];
    }
    </script>
</div>

<iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~AbteilungHolz/71.embed"></iframe>

<p style="text-align: left;">

<img src="../images/u_intStoss.JPG" width="350px" alt="u_intStoss"><br><br>

Foto ...<br>

<img src="../images/u_oben.JPG" width="500px" alt="u_oben"><br>

Foto ...<br><br>

</p>

