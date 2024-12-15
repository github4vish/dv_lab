fetch("healthcare_data.json")
.then(response => response.json())
.then(data => {
    const chart = new CanvasJS.Chart("barChart", {
        animationEnabled: true,
        theme: "light2",
        title: { text: "Patient Distribution by Age Groups" },
        axisX: { title: "Departments" },
        axisY: { title: "Number of Patients" },
        data: [
            {
                type: "bar",
                name: "Age 0-18",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup0to18
                }))
            },
            {
                type: "bar",
                name: "Age 19-35",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup19to35
                }))
            },
            {
                type: "bar",
                name: "Age 36-60",
                dataPoints: data.map(item => ({
                    label: item.Department,
                    y: item.AgeGroup36to60
                }))
            },
            {
                type: "bar",
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

