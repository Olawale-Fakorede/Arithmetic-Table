document.getElementById("btn").addEventListener("click", function() {
    var tableContent = ""; // Initialize an empty string to hold the table content
    
    for (var i = 1; i <= 12; i++) {
        tableContent += "<tr><br>"; // Start a new row
        for (var j = 1; j <=6; j++) {
            if (i == 5) {break}
            tableContent += "<td>" + (j + " x " + i + " = " + j*i) + "</td>";
        }
        tableContent += "</tr><br><br><br><br>"; // End the row
    }

    // Add a large space between the two loops
    tableContent += "<br style='line-height:100px'/>";

    for (var i = 1; i <= 12; i++) {
        tableContent += "<tr><br>"; // Start a new row
        for (var j = 7; j <=12; j++) {
            if (i == 5) {break}
            tableContent += "<td>" + (j + " x " + i + " = " + j*i) + "</td>";
        }
        tableContent += "</tr><br>"; // End the row
    }
    
    document.querySelector("table").innerHTML = tableContent; // Set the innerHTML of the table
    document.querySelector("tr").style.border = "4px groove black"
    document.querySelector("table").style.fontSize = "15px"
});
