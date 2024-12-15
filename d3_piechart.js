fetch('data.json')
    .then(response => response.json())
    .then(data => {
        function drawPieChart() {
            const chart = new CanvasJS.Chart("pieChart", {
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: "Marks Distribution"
                },
                data: [{
                    type: "pie",
                    startAngle: 0,
                    showInLegend: true,
                    toolTipContent: "<b>{label}</b>: {y} Marks",
                    dataPoints: data.map(item => ({
                        label: item.Name,
                        y: item.Marks
                    }))
                }]
            });

            chart.render();
        }

        drawPieChart();
    });
