fetch("healthcare_data.json")
.then(response => response.json())
.then(data => {
    const chart = new CanvasJS.Chart("stackedColumnChart", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Patients by Age Group (Stacked)"
        },
        axisY: {
            title: "Number of Patients"
        },
        toolTip: {
            shared: true
        },
        data: [
            {
                type: "stackedColumn",
                name: "Age 0-18",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup0to18
                }))
            },
            {
                type: "stackedColumn",
                name: "Age 19-35",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup19to35
                }))
            },
            {
                type: "stackedColumn",
                name: "Age 36-60",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup36to60
                }))
            },
            {
                type: "stackedColumn",
                name: "Age 60+",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup60Plus
                }))
            }
        ]
    });
    chart.render();
});
