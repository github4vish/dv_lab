google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(() => {
    fetch('student_data.json')
        .then(response => response.json())
        .then(data => {
            const chartData = [["Course", "Students"]];
            data.forEach(item => {
                chartData.push([item.Course, item.Students]);
            });

            const googleData = google.visualization.arrayToDataTable(chartData);

            const options = {
                title: "Students in Courses",
                is3D: true,
            };

            const chart = new google.visualization.PieChart(document.getElementById("pieChart"));
            chart.draw(googleData, options);
        });
});
