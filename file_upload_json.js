// Function to handle file input change
function fileUploadJSON() {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            const jsonData = JSON.parse(e.target.result);

           // Assume the JSON structure is an array of objects
           const rows = [];
           const keys = Object.keys(jsonData[0]); // Get the column headers
           rows.push(keys); // Add headers as the first row

           // Populate rows with data
           jsonData.forEach(item => {
               const row = keys.map(key => item[key]);
               rows.push(row);
           });
               
            // Generate the data table
            generateDataTable(rows);

            // Extract numerical data for the chart (e.g., from the second column)
            const data = rows.slice(1).map(row => ( parseInt(row[1]) ));

            // Use the drawBarChart function from Experiment 4
            drawBarChart(data);
        };
        reader.readAsText(file);
    } else {
        alert("Please select a valid .txt file.");
    }
}
