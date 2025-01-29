// Load the Google Charts library
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(() =>  {
    fetch('market_analysis_data.json')
.then(response => response.json())
.then(data => {
    const chartData = new google.visualization.DataTable();
    chartData.addColumn('string', 'Year');
    chartData.addColumn('number', 'Low');
    chartData.addColumn('number', 'Open');
    chartData.addColumn('number', 'Close');
    chartData.addColumn('number', 'High');

    // Add rows dynamically
    data.forEach(item => {
        chartData.addRow([item.Year, item.Low, item.Open, item.Close, item.High]);
    });

    const options = {
        title: 'Sales Data (Candle Chart)',
        legend: 'none',
        candlestick: {
            fallingColor: { strokeWidth: 0, fill: '#a52714' }, // Red for downward trend
            risingColor: { strokeWidth: 0, fill: '#0f9d58' } // Green for upward trend
        }
    };

    const chart = new google.visualization.CandlestickChart(document.getElementById('candleChart'));
    chart.draw(chartData, options);
})
.catch(error => console.error('Error loading JSON data:', error));   
});