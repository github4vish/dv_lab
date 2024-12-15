fetch("healthcare_data.json")
.then(response => response.json())
.then(data => {
    const totalByAgeGroup = [
        { label: "Age 0-18", y: data.reduce((sum, item) => sum + item.AgeGroup0to18, 0) },
        { label: "Age 19-35", y: data.reduce((sum, item) => sum + item.AgeGroup19to35, 0) },
        { label: "Age 36-60", y: data.reduce((sum, item) => sum + item.AgeGroup36to60, 0) },
        { label: "Age 60+", y: data.reduce((sum, item) => sum + item.AgeGroup60Plus, 0) }
    ];

    const chart = new CanvasJS.Chart("pieChart", {
        animationEnabled: true,
        theme: "light2",
        title: { text: "Overall Patient Distribution by Age Groups" },
        data: [
            {
                type: "pie",
                dataPoints: totalByAgeGroup
            }
        ]
    });
    chart.render();
})
.catch(error => console.error("Error loading JSON data:", error));