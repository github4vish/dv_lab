// Function to handle file input change
function fileUploadXML() {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(e.target.result, "application/xml");
 
            // Extract data from the XML file
            const rows = [];
            const records = xmlDoc.getElementsByTagName("record");
 
            // Prepare rows for the data table
            for (let i = 0; i < records.length; i++) {
                const cells = [];
                for (let j = 0; j < records[i].children.length; j++) {
                    cells.push(records[i].children[j].textContent);
                }
                rows.push(cells);
            }
               
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
