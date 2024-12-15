fetch("healthcare_data.json")
.then(response => response.json())
.then(data => {
    const chart = new CanvasJS.Chart("lineChart", {
        animationEnabled: true,
        theme: "light2",
        title: { text: "Patients Trend Over Age Groups" },
        axisX: { title: "Departments" },
        axisY: { title: "Number of Patients" },
        data: [
            {
                type: "line",
                name: "Age 0-18",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup0to18
                }))
            },
            {
                type: "line",
                name: "Age 19-35",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup19to35
                }))
            },
            {
                type: "line",
                name: "Age 36-60",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup36to60
                }))
            },
            {
                type: "line",
                name: "Age 60+",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup60Plus
                }))
            }
        ]
    });
    chart.render();
})
.catch(error => console.error("Error loading JSON data:", error));