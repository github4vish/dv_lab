function drawBarChart(data, barWidth = 40, gap = 20, fillStyle = "blue") {
    const canvas = document.getElementById("barChart");
    const ctx = canvas.getContext("2d");

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set the initial x-coordinate
    let x = 50;

    // Set the fill style for the bars
    ctx.fillStyle = fillStyle;

    // Draw the bars
    data.forEach(value => {
        ctx.fillRect(x, canvas.height - value, barWidth, value);
        x += barWidth + gap;
    });
}