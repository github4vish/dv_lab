function readCSV(callback) {
    fetch("healthcare_data.csv")
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").slice(1); // Skip header
            const parsedData = rows.map(row => {
                const cols = row.split(",");
                return {
                    Department: cols[0],
                    Patients: parseInt(cols[1]),
                    AgeGroup0to18: parseInt(cols[2]),
                    AgeGroup19to35: parseInt(cols[3]),
                    AgeGroup36to60: parseInt(cols[4]),
                    AgeGroup60Plus: parseInt(cols[5]),
                };
            });
            callback(parsedData);
        });
}
