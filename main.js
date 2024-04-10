
// document.getElementById("btn").addEventListener("click", function() {
//     var tableContent = ""; // Initialize an empty string to hold the table content
    
//         for (var i = 1; i <= 12; i++) {
//             tableContent += "<tr><br>"; // Start a new row
//                 for (var j = 1; j <=12; j++) {
//                     // tableContent += "<td>" + (i + " x " + j + " = " + i*j) + "</td>"; // Add a cell with the product

//                     if (i == 5) {break}
//                         tableContent += "<td>" + (j + " x " + i + " = " + j*i) + "</td>";
//                 }
//             tableContent += "</tr><br>"; // End the row
//         }
    
//         document.querySelector("table").innerHTML = tableContent; // Set the innerHTML of the table
//         document.querySelector("table, th, tr, td").style.border = "4px groove black"
//             document.querySelector("table").style.fontSize = "15px"
//             document.querySelector("table").style.width = "100vw"
//             // document.querySelector("table").style.height = "40vh"
//             // document.querySelector("td").style.border = "1px solid black"
            
// });

        

document.getElementById("btn").addEventListener("click", function() {

    var tableContent = ""; // Initialize an empty string to hold the table content
    
        for (var i = 1; i <= 12; i++) {
            tableContent += "<tr><br>"; // Start a new row
                for (var j = 1; j <=6; j++) {
                    tableContent += "<td>" + (i + " x " + j + " = " + i*j) + "</td>"; // Add a cell with the product

                    // if (i == 5) {break}
                        // tableContent += "<td>" + (j + " x " + i + " = " + j*i) + "</td>";
                }
            tableContent += "</tr><br>"; // End the row
        }


    tableContent += "<tr><td></td><br></tr><br>";


        for (var i = 1; i <= 12; i++) {
            tableContent += "<tr><br>"; // Start a new row
                for (var j = 7; j <=12; j++) {
                    tableContent += "<td>" + (i + " x " + j + " = " + i*j) + "</td>"; // Add a cell with the product

                    // if (i == 5) {break}
                        // tableContent += "<td>" + (j + " x " + i + " = " + j*i) + "</td>";
                }
            tableContent += "</tr><br>"; // End the row
        }
    
        document.querySelector("table").innerHTML = tableContent; // Set the innerHTML of the table
        document.querySelector("tr").style.border = "4px groove black"
        document.querySelector("table").style.fontSize = "15px"
        document.querySelector("table").style.width = "98vw"
            // document.querySelector("table").style.height = "40vh"
            // document.querySelector("td").style.border = "1px solid black"
        document.querySelector("#btn").style.visibility = "hidden"
        document.querySelector("#btn").style.marginTop = "-50px"
        document.querySelector("div").style.marginBottom = "-600px"
            
});

        
