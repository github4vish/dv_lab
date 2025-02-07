google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawCandleChart);

function drawCandleChart() {
    fetch('market_analysis_data.json')
        .then(response => response.json())
        .then(data => {
            const chartData = new google.visualization.DataTable();
            chartData.addColumn('string', 'Year');
            ['Low', 'Open', 'Close', 'High'].forEach(label => chartData.addColumn('number', label));

            data.forEach(item => chartData.addRow([item.Year, item.Low, item.Open, item.Close, item.High]));

            const options = {
                title: 'Sales Data (Candle Chart)',
                hAxis: { title: 'Year' },
                vAxis: { title: 'Value', gridlines: { count: 6 } },
                legend: 'none',
                chartArea: { width: '75%', height: '70%' },
                colors: ['#2ca02c']
            };

            new google.visualization.CandlestickChart(document.getElementById('candleChart')).draw(chartData, options);
        })
        .catch(error => console.error('Error loading JSON data:', error));
}
