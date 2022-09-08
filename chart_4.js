window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer4", {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Decline of Black Student Enrollment at 4-Year Public Universities"
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }], 
        axisX: {
            title: "Semester"
        },
        axisY: {
            title: "% Black Student Enrollement",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            includeZero: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            name: "Men",
            showInLegend: true,      
            yValueFormatString: "#,##0.# Units",
            dataPoints: [
                { label: "Fall 2019",  y: -5.6 },
                { label: "Fall 2020", y: -2.4 },
                { label: "Fall 2021", y: -3.6 }
            ]
        },
        {
            type: "column",
            name: "Women",
            showInLegend: true,
            yValueFormatString: "#,##0.# Units",
            dataPoints: [
                { label: "Fall 2019", y: -5.0 },
                { label: "Fall 2020", y: -4.7 },
                { label: "Fall 2021", y: -4.6 }
            ]
        },{
            type: "column",
            name: "Overall",
            showInLegend: true,
            yValueFormatString: "#,##0.# Units",
            dataPoints: [
                { label: "Fall 2019", y: -10.3 },
                { label: "Fall 2020", y: -7.1 },
                { label: "Fall 2021", y: -8.0 }
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
    
    

    
    }