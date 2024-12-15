// Function to handle file input change
function fileUpload() {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            const content = e.target.result;
           //for data.txt
            //const rows = content.trim().split("\n").map(row => row.split("\t"));

            //for data.csv
            const rows = content.trim().split("\n").map(row => row.split(","));
            
            generateDataTable(rows);

            const data = rows.slice(1).map(row => ( parseInt(row[1]) ));

            // Use the drawBarChart function from Experiment 4
            drawBarChart(data);
        };
        reader.readAsText(file);
    } else {
        alert("Please select a valid .txt file.");
    }
}
