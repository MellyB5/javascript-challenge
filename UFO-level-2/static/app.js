var tableData = data;

var tbody = d3.select("tbody");
console.log(tbody);


function draw_data(updated_data){
    tbody.html("");
    updated_data.forEach(element => {
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
    var value = d3.select("#datetime").property("value");
    if(value!=="") new_data1 = new_data1.filter(d => d.datetime===value);
    value = d3.select("#city").property("value");
    if(value!=="") new_data1 = new_data1.filter(d => d.city===value);
    value = d3.select("#state").property("value");
    if(value!=="") new_data1 = new_data1.filter(d => d.state===value);
    value = d3.select("#country").property("value");
    if(value!=="") new_data1 = new_data1.filter(d => d.country===value);
    value = d3.select("#shape").property("value");
    if(value!=="") new_data1 = new_data1.filter(d => d.shape===value);
    draw_data(new_data1);
}
d3.select("#filters").on("change", update_page);


