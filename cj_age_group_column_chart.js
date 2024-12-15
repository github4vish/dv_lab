fetch("healthcare_data.json")
.then(response => response.json()).then(data => {
    const chart = new CanvasJS.Chart("ageGroupColumnChart", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Patients per Age Group in Each Department"
        },
        axisX: {
            title: "Departments",
            interval: 1
        },
        axisY: {
            title: "Number of Patients",
            includeZero: true
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: function (e) {
                e.dataSeries.visible = !(e.dataSeries.visible ?? true);
                chart.render();
            }
        },
        data: [
            {
                type: "column",
                name: "Age 0-18",
                showInLegend: true,
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup0to18
                }))
            },
            {
                type: "column",
                name: "Age 19-35",
                showInLegend: true,
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup19to35
                }))
            },
            {
                type: "column",
                name: "Age 36-60",
                showInLegend: true,
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup36to60
                }))
            },
            {
                type: "column",
                name: "Age 60+",
                showInLegend: true,
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup60Plus
                }))
            }
        ]
    });
    chart.render();
});