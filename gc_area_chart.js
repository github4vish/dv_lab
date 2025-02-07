google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawAreaChart);

function drawAreaChart() {
    fetch('market_analysis_data.json')
        .then(response => response.json())
        .then(data => {
            const chartData = new google.visualization.DataTable();
            chartData.addColumn('string', 'Year');
            ['Open', 'Close', 'High', 'Low'].forEach(label => chartData.addColumn('number', label));

            data.forEach(item => chartData.addRow([item.Year, item.Open, item.Close, item.High, item.Low]));

            const options = {
                title: 'Sales Data (Area Chart)',
                hAxis: { title: 'Year', slantedText: true },
                vAxis: { title: 'Value', gridlines: { count: 6 } },
                legend: { position: 'top' },
                areaOpacity: 0.4,
                chartArea: { width: '75%', height: '70%' },
                colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']
            };

            new google.visualization.AreaChart(document.getElementById('areaChart')).draw(chartData, options);
        })
        .catch(error => console.error('Error loading JSON data:', error));
}
