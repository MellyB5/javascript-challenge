// from data.js
var tableData = data;
// YOUR CODE HERE!
// console.log(tableData);
var tbody = d3.select("tbody");
console.log(tbody);

/*
data information and headings
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
        tableRow.append("td").text(element.datetime);
        tableRow.append("td").text(element.city);
        tableRow.append("td").text(element.state);
        tableRow.append("td").text(element.country);
        tableRow.append("td").text(element.shape);
        tableRow.append("td").text(element.durationMinutes);
        tableRow.append("td").text(element.comments);
    });
}

draw_data(tableData);

function update_page(){
    new_data1 = tableData;
    var value1 = d3.select("#datetime").property("value");
    if(value1!=="") new_data1 = new_data1.filter(d => d.datetime===value1);
    var value2 = d3.select("#city").property("value");
    if(value2!=="") new_data1 = new_data1.filter(d => d.city===value2);
    var value2 = d3.select("#state").property("value");
    if(value2!=="") new_data1 = new_data1.filter(d => d.state===value2);
    var value2 = d3.select("#country").property("value");
    if(value2!=="") new_data1 = new_data1.filter(d => d.country===value2);
    var value2 = d3.select("#shape").property("value");
    if(value2!=="") new_data1 = new_data1.filter(d => d.shape===value2);
    draw_data(new_data1);
}
d3.select("#filters").on("change", update_page);


