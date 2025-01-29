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
                title: "Product Sales",
                chartArea: { width: "50%" },
                hAxis: { title: "Sales", minValue: 0 },
                vAxis: { title: "Year" },
            };

            const chart = new google.visualization.BarChart(document.getElementById("barChart"));
            chart.draw(googleData, options);
        });
});
