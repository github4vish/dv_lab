function generateDataTable(rows) {
    const table = document.getElementById("dataTable");

    
    table.setAttribute("border","1");

    // Clear the table
    table.innerHTML = "";

    rows.forEach((row, index) => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const cellElement = document.createElement(index === 0 ? "th" : "td");
            cellElement.textContent = cell;
            tr.appendChild(cellElement);
        });
        table.appendChild(tr);
    });

}
