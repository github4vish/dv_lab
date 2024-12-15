google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(() => {
    fetch('market_analysis_data.json')
        .then(response => response.json())
        .then(data => {
            const chartData = [["Year", "Sales"]];
            data.filter(item => item.Year).forEach(item => {
                chartData.push([item.Year, item.Sales]);
            });

            const googleData = google.visualization.arrayToDataTable(chartData);

            const options = {
                title: "Sales Over Time",
                curveType: "function",
                legend: { position: "bottom" },
            };

            const chart = new google.visualization.LineChart(document.getElementById("lineChart"));
            chart.draw(googleData, options);
        });
});
