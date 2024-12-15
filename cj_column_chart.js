fetch("healthcare_data.json")
.then(response => response.json()) 
.then( data => {
    const chart = new CanvasJS.Chart("columnChart", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Total Patients per Department"
        },
        axisY: {
            title: "Number of Patients"
        },
        data: [{
            type: "column",
            dataPoints: data.map(item => ({
                label: item.Department,
                y: item.Patients
            }))
        }]
    });
    chart.render();
})