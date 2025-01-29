google.charts.load('current', { packages: ['geochart'] });
google.charts.setOnLoadCallback(() => {
  fetch('gc_data.json')
 .then(response => response.json())
 .then(data => {
    const geoData = new google.visualization.DataTable();
    geoData.addColumn('string', 'Country');  // Ensure correct column type
    geoData.addColumn('number', 'Value');    // Required for visualization

    data.forEach(item => {
        geoData.addRow([item.city, item.value]); // Ensure the JSON contains 'city' and 'value'
    });

    const geoOptions = {
        region: 'world',  // Change to 'US' for USA-specific data
        colorAxis: { colors: ['yellow', 'red'] },
        

    };

    const geoChart = new google.visualization.GeoChart(document.getElementById('geoChart'));
    geoChart.draw(geoData, geoOptions);
})
.catch(error => console.error('Error loading JSON data:', error));
});