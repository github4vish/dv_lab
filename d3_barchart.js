fetch('data.json')
    .then(response => response.json())
    .then(data => {
        function drawBarChart() {
            const chart = new CanvasJS.Chart("barChart", {
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: "Marks by Students"
                },
                axisY: {
                    title: "Marks",
                    includeZero: true
                },
                data: [{
                    type: "column",
                    dataPoints: data.map(item => ({
                        label: item.Name,
                        y: item.Marks
                    }))
                }]
            });

            chart.render();
        }

        drawBarChart();
    });
