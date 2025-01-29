// Load the Google Charts API
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback( ()=>{
    fetch('market_analysis_data.json')
    .then(response => response.json())
    .then(data => {
        const chartData = new google.visualization.DataTable();
        chartData.addColumn('string', 'Year');
        chartData.addColumn('number', 'Open');
        chartData.addColumn('number', 'Close');
        chartData.addColumn('number', 'High');
        chartData.addColumn('number', 'Low');

        // Add rows dynamically
        data.forEach(item => {
            chartData.addRow([item.Year, item.Open, item.Close, item.High, item.Low]);
        });

        const options = {
            title: 'Sales Data (Area Chart)',
            hAxis: { title: 'Year' },
            vAxis: { title: 'Value' },
            legend: { position: 'bottom' },
            areaOpacity: 0.3,
            colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']
        };

        const chart = new google.visualization.AreaChart(document.getElementById('areaChart'));
        chart.draw(chartData, options);
    })
    .catch(error => console.error('Error loading JSON data:', error));
});
