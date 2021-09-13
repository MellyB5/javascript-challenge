// from data.js
var tableData = data;
// YOUR CODE HERE!
// console.log(tableData);
var tbody = d3.select("tbody");
console.log(tbody);
/*
city: "springfield"
comments: "black floating object with lights"
country: "us"
datetime: "1/12/2010"
durationMinutes: "3 minutes"
shape: "changing"
state: "or"
*/
function draw_data(updated_data){
    tbody.html("");
    updated_data.forEach(element => {
        // console.log(element);
        var tableRow= tbody.append("tr");
        tbody.append("td").text(element.datetime);
        tbody.append("td").text(element.city);
        tbody.append("td").text(element.state);
        tbody.append("td").text(element.country);
        tbody.append("td").text(element.shape);
        tbody.append("td").text(element.durationMinutes);
        tbody.append("td").text(element.comments);
    });
    
}
draw_data(tableData);
function update_page(){
    var value = d3.select("#datetime").property("value");
    console.log(value);
    var new_data = tableData.filter(d => d["datetime"]===value);
    console.log(new_data);
    draw_data(new_data);
}
d3.select("#datetime").on("change", update_page);
