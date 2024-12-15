fetch('data.json')
    .then(response => response.json())
    .then(data => {
        function drawLineChart() {
            const chart = new CanvasJS.Chart("lineChart", {
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: "Marks by Students"
                },
                axisX: {
                    title: "Student Name"
                },
                axisY: {
                    title: "Marks",
                    includeZero: true
                },
                data: [{
                    type: "line",
                    markerSize: 5,
                    dataPoints: data.map(item => ({
                        label: item.Name,
                        y: item.Marks
                    }))
                }]
            });

            chart.render();
        }

        drawLineChart();
    });
