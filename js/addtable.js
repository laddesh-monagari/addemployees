
var employees=[
    {
      "id": "TZ002345",
      "firstName": "Michael",
      "lastName": "Miller",
      "dateOfBirth": "03/18/1975",
      "emailId": "michael.miller@exp.com",
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
      "emailId": "john.doe@example.com",
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
      "emailId": "alice.johnson@example.com",
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
      "emailId": "jane.smith@example.com",
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
      "emailId": "david.brown@example.com",
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
var loadtable=()=> {
    table = document.getElementsByClassName("table-container")[0];
    for (var emp of tabledata) {
        var row = table.insertRow(-1);
        tablecell1(emp,row);
        tablecell2(emp,row);
        tablecell3(emp,row);
        tablecell4(emp,row);
        tablecell5(emp,row);
        tablecell6(emp,row);
        tablecell7(emp,row);
        tablecell8(emp,row);
    }
}
window.onload=function(){
    loadtable();
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
        div.appendChild(document.createElement("img"));
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


/*Adding data from form to table.

function addData(){
     empno = document.getElementById("empno").value; 
	let firstname = document.getElementById("firstname").value; 
    let lastname = document.getElementById("lastname").value; 
	//let dob = document.getElementById("dob").value; 
    let mail = document.getElementById("mail").value; 
	//let mobileno = document.getElementById("mobileno").value; 
    let joindate = document.getElementById("joindate").value; 
	let location = document.getElementById("location").value;
    let jobtitle = document.getElementById("jobtitle").value;
    let department = document.getElementById("department").value;
   // let manager = document.getElementById("manager").value;
    //let project = document.getElementById("project").value;

    // let table = document.getElementById("table-container"); 
    // let newRow = table.insertRow(table.rows.length);
   let newrow = table.insertRow();
   let col1 = newrow.insertCell(0);
   let col2 = newrow.insertCell(1);
   let col3 = newrow.insertCell(2);
   let col4 = newrow.insertCell(3);
   let col5 = newrow.insertCell(4);
   let col6 = newrow.insertCell(5);
   let col7 = newrow.insertCell(6);
   let col8 = newrow.insertCell(7);
//    let col9 = newrow.insertCell(8);

    newRow.insertCell(0).innerHTML = firstname+" "+lastname; 
    newRow.insertCell(1).innerHTML = mail; 
    newRow.insertCell(2).innerHTML = location; 
    newRow.insertCell(3).innerHTML = department;
    newRow.insertCell(4).innerHTML = jobtitle;
    newRow.insertCell(5).innerHTML = empno;
    newRow.insertCell(6).innerHTML = "Active";
    newRow.insertCell(7).innerHTML = joindate;
}*/
function export_data() {
  const data = employees;
  const csvString = `id,firstName,lastName,dateOfBirth,emailId,mobileNo,joiningDate,location,jobTitle,department,manager,project\n` +
      data.map(emp => Object.values(emp).join(",")).join("\n");

  const blob = new Blob([csvString], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'employee_data.csv';
  link.click();
  window.URL.revokeObjectURL(link.href);
}

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
function reset() {
  var table = document.getElementById("table-container");
  var rows = table.getElementsByTagName("tr");
  for (var i = 1; i < rows.length; i++) {
    rows[i].style.display = "";
  }
}


function deleteSelected() {
    var checkboxes = document.getElementsByClassName('delete-checkbox');
    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var selectedRowsIndexes = [];
 
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedRowsIndexes.push(i);
      }
    }
    for (var j = selectedRowsIndexes.length - 1; j >= 0; j--) {
      table.deleteRow(selectedRowsIndexes[j]);
    }
    updateLocalStorage();
  }