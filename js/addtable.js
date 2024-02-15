
var employees=[
    {
      "id": "TZ002345",
      "firstName": "Michael",
      "lastName": "Miller",
      "dateOfBirth": "03/18/1975",
      "emailId": "michael@exp.com",
      "mobileNo": "(555) 555-6666",
      "joiningDate": "12/12/2025",
      "location": "Hyderabad",
      "jobTitle": "Project Manager",
      "department": "Management",
      "manager": "Jane Smith",
      "project": "Task8"
    },
    {
      "id": "TZ002346",
      "firstName": "John",
      "lastName": "Doe",
      "dateOfBirth": "05/25/1980",
      "emailId": "john@example.com",
      "mobileNo": "(555) 123-4567",
      "joiningDate": "01/01/2023",
      "location": "New York",
      "jobTitle": "Software Engineer",
      "department": "Engineering",
      "manager": "Alice Johnson",
      "project": "Project X"
    },
    {
      "id": "TZ002347",
      "firstName": "Alice",
      "lastName": "Johnson",
      "dateOfBirth": "12/10/1990",
      "emailId": "alice@example.com",
      "mobileNo": "(555) 987-6543",
      "joiningDate": "03/05/2022",
      "location": "San Francisco",
      "jobTitle": "Product Manager",
      "department": "Product",
      "manager": "Bob Williams",
      "project": "Product Launch"
    },
    {
      "id": "TZ002348",
      "firstName": "Jane",
      "lastName": "Smith",
      "dateOfBirth": "09/15/1985",
      "emailId": "smith@example.com",
      "mobileNo": "(555) 456-7890",
      "joiningDate": "06/20/2021",
      "location": "London",
      "jobTitle": "Marketing Manager",
      "department": "Marketing",
      "manager": "David Brown",
      "project": "Marketing Campaign"
    },
    {
      "id": "TZ002349",
      "firstName": "David",
      "lastName": "Brown",
      "dateOfBirth": "11/30/1978",
      "emailId": "brown@example.com",
      "mobileNo": "(555) 789-0123",
      "joiningDate": "09/10/2020",
      "location": "Berlin",
      "jobTitle": "HR Manager",
      "department": "Human Resources",
      "manager": "N/A",
      "project": "Employee Onboarding"
    }
  ]
  

var table;
var tabledata=employees;
var loadtable=(temp_tabledata=tabledata)=> {
    table = document.getElementsByClassName("table-container")[0];
    for (var emp of temp_tabledata) {
        var row = table.insertRow(-1);
        tablecell1(emp,row);
        tablecell2(emp,row);
        tablecell3(emp,row);
        tablecell4(emp,row);
        tablecell5(emp,row);
        tablecell6(emp,row);
        tablecell7(emp,row);
        tablecell8(emp,row);
        tablecell9(emp,row);
    }
}
function tablecell1(emp,row){
    let cell1 = row.insertCell(0);
    cell1.classList.add("checkbox");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    cell1.appendChild(checkbox);
}
function tablecell2(emp,row){
    let cell2=row.insertCell(1);
        let div=document.createElement("div");
        div.classList.add("employee-info");
        let rowImage=document.createElement("img");
        if(localStorage.getItem(emp.id)){
          rowImage.src=localStorage.getItem(emp.id);
        }
        div.appendChild(rowImage);
        let div2=document.createElement("div");
        div2.classList.add("profile");
        let ptext=document.createElement("p");
        ptext.textContent=emp.firstName +" "+ emp.lastName;
        let ptext2=document.createElement("p");
        ptext2.textContent=emp.emailId;
        div2.appendChild(ptext);
        div2.appendChild(ptext2);
        div.appendChild(div2);
        cell2.appendChild(div);
}
function tablecell3(emp,row){
    let cell3=row.insertCell(2);
    cell3.textContent=emp.location;
}
function tablecell4(emp,row){
    let cell4=row.insertCell(3);
    cell4.textContent=emp.department;
    
}
function tablecell5(emp,row){
    let cell5=row.insertCell(4);
    cell5.textContent=emp.jobTitle;
}
function tablecell6(emp,row){
    let cell6=row.insertCell(5);
    cell6.textContent=emp.id;
}
function tablecell7(emp,row){
    let cell7=row.insertCell(6);
    cell7.textContent="Active";
}
function tablecell8(emp,row){
    let cell8=row.insertCell(7);
    cell8.textContent=emp.joiningDate;
}
function tablecell9(emp,row){
  let cell9=row.insertCell(8);
  cell9.classList.add("ddl-excesscolums");
  cell9.innerHTML=`<button class="menu-button" >...</button><div class="content"><a href="#">View Details</a><a href="#">Edit</a><a href="#">Delete</a></div>`;

}

//Hiding the sidenav-bar when clicked on image...
var hidden=0;
function hidesidenavbar(){
  var hide=document.getElementsByClassName("side-navbar")[0];
  var hide1=document.getElementsByClassName("hidden-side-navbar")[0];
  var expand=document.getElementsByClassName("context")[0];
  if(hidden===0){
    hide.style.display="none";
    hide1.style.display="flex";
    expand.style.width="100%";
    hidden=1;
  }
  else{
    hide.style.display="block";
    hide1.style.display="none";
    expand.style.width="80%";
    hidden=0;
  }
}

  //exporting data from the table to csv....
function exportToCsv() {
  const csvString = generateCSVString(employees);
  downloadCSV(csvString, 'employee_data.csv');
}
function generateCSVString(data) {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(emp => Object.values(emp).join(','));
  return `${headers}\n${rows.join('\n')}`;
}
function downloadCSV(csvString, fileName) {
  const blob = new Blob([csvString], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}
function exportToCsv(filename) {
  var csv = [];
  var rows = document.querySelectorAll("table tr");
  for (var i = 0; i < rows.length; i++) {
      // Check if the row is hidden due to filtering
      if (rows[i].classList.contains('filtered')) continue;
      var row = [], cols = rows[i].querySelectorAll("td, th");
      for (var j = 0; j < cols.length; j++) 
          row.push(cols[j].innerText);
      csv.push(row.join(","));        
  }
  downloadCSV(csv.join("\n"), filename); // Download CSV file
}
    // filtering table-data with alphabet buttons
function filterByName(alphabet) {
  var table = document.getElementById("table-container");
  var rows = table.getElementsByTagName("tr");
  for (var i = 1; i < rows.length; i++) {
    var NameCell = rows[i].getElementsByTagName("td")[1];
    var name = NameCell.textContent || NameCell.innerText;
    if (name.charAt(0).toUpperCase() === alphabet) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
      //filter-bar operations....
var filerhide=0;
function hidefilterbar(){
  var hide = document.getElementsByClassName("filter-bar")[0];
  if(filerhide===0){
    hide.style.display="flex";
    filerhide=1;
  }
  else{
    hide.style.display="none";
    filerhide=0;
  }
}
function optionToggler(selectbutton) {
  let toggle = 0;
  const nextSibling = selectbutton.nextElementSibling;
  const computedStyle = window.getComputedStyle(nextSibling);
  if (toggle === 1) {
      nextSibling.style.display = "none";
      toggle=0;
  }
  else if (toggle === 0) {
      nextSibling.style.display = "block";
      toggle = 1;
  }
}
function location_filter(givendata) {
  let locations = document.getElementsByClassName("location-check");
  console.log(locations);
  let loc_array = [];
  for (let loc of locations) {
      if (loc.checked) {
          loc_array.push(loc.value);
      }
  }
  console.log(loc_array);
  if (loc_array.length === 0) {
      return givendata;
  }
  let afterData = [];
  for (let temp of givendata) {
      if (loc_array.includes(temp.location)) {
          afterData.push(temp);
      }
  }
  console.log(afterData);
  return afterData;
}
function department_filter(givendata) {
  let dept = document.getElementsByClassName("department-check");
  let dep_array = [];
  for (let loc of dept) {
      if (loc.checked) {
          dep_array.push(loc.value);
          console.log(loc.value);
      }
  }
  if(dep_array.length === 0) {
      return givendata;
  }
  let afterData = [];
  for (let temp of givendata) {
      if (dep_array.includes(temp.department)) {
          afterData.push(temp);
      }
  }
  return afterData;
}
function apply() {
  let filterdata = employees;
  filterdata = location_filter(filterdata);
  filterdata = department_filter(filterdata);
  let ftext = document.getElementsByClassName("filter-info")[0];
  ftext.style.color = "rgb(244, 72, 72)";
  Cleartable();
  var tb1=document.getElementById('table-container');
  var x=tb1.rows.length;
  while(--x){
    tb1.deleterow(x);
  }

  loadtable(filterdata);
}
window.addEventListener("onload",getdata());
function getdata(){
  let info=JSON.parse(localStorage.getItem("myKey"));
  for(let a in info){
    tabledata.push(info[a]);
  }
  Cleartable();
  loadtable();
}
    //Operations on table.... 
function Cleartable() {
  const tableBody = document.querySelector('table tbody');
  while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.lastChild);
  }
}
function reset() {
  Cleartable();
  loadtable(employees);
  let ftext = document.getElementsByClassName("filter-info")[0];
  ftext.style.color = "rgb(106, 111, 125)";
  clearFilters();
}
function deleterow() {
  var table = document.getElementById('table-container'); 
  var rowCount = table.rows.length;
  console.log(rowCount);
  for (var i = 0; i < rowCount; i++) {
      var row = table.rows[i];
      var chkbox = row.cells[0].querySelector('input[type="checkbox"]'); 
      if (chkbox && chkbox.checked) { 
          if (rowCount <= 1) {
              alert("Cannot delete all the rows.");
              break;
          }
          table.deleteRow(i);
          rowCount--;
          i--;
      }
  }
}

let sortcoloumns = [false, false, false, false, false, false, false, false];
function sortrows(columnIndex) {
    if (sortcoloumns[columnIndex] === false) {
        sortTableAesc(columnIndex);
        sortcoloumns[columnIndex] = true;
    } 
}

cPrev = -1; // global var saves the previous c, used to determine if the same column is clicked again
function sortBy(c) {
    rows = document.getElementById("table-container").rows.length; 
    columns = document.getElementById("table-container").rows[0].cells.length; 
    arrTable = [...Array(rows)].map(e => Array(columns)); 

    for (ro=0; ro<rows; ro++) { 
        for (co=0; co<columns; co++) { 
            arrTable[ro][co] = document.getElementById("table-container").rows[ro].cells[co].innerHTML;
        }
    }

    th = arrTable.shift(); // remove the header row from the array, and save it
    
    if (c !== cPrev) { // different column is clicked, so sort by the new column
        arrTable.sort(
            function (a, b) {
                if (a[c] === b[c]) {
                    return 0;
                } else {
                    return (a[c] < b[c]) ? -1 : 1;
                }
            }
        );
    } else { // if the same column is clicked then reverse the array
        arrTable.reverse();
    }
    cPrev = c;
    arrTable.unshift(th); // put the header back in to the array
    for (ro=0; ro<rows; ro++) {
        for (co=0; co<columns; co++) {
            document.getElementById("table-container").rows[ro].cells[co].innerHTML = arrTable[ro][co];
        }
    }
}