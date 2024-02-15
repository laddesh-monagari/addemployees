const empIdList = ["TZ002340", "TZ002341", "TZ002342", "TZ002343", "TZ002344", "TZ002345", "TZ002346", "TZ002347", "TZ002348", "TZ002349", "TZ002350", "TZ002351", "TZ002352"];
var employee_data = [];

class Employee {
  constructor(empno, firstname,lastname, dob, mail,mobileno, joindate, location, jobtitle, department, manager, project, imageurl) {
    this.id = empno;
    this.firstName = firstname; 
    this.lastName = lastname;
    this.fullName = `${firstname} ${lastname}`;
    this.dateOfBirth = new Date(dob);
    this.emailId = mail;
    this.mobileNo = mobileno;
    this.joiningDate = new Date(joindate);
    this.location = location;
    this.jobTitle = jobtitle;
    this.department = department;
    this.manager = manager;
    this.project = project;
    this.imageurl = imageurl;
  }
  
  formatDob(options = { year: 'numeric', month: 'long', day: 'numeric' }) {
    return this.dateOfBirth.toLocaleDateString('en-US', options);
  }
}

function addData(){
  let empno=document.getElementById("empno").value;
  checkEmpId(empno);
  let firstname=document.getElementById("firstname").value;
  let lastname=document.getElementById("lastname").value;
  var dob=document.getElementById("dob").value;
  var mail=document.getElementById("mail").value;
  var mobileno=document.getElementById("mobileno").value;
  var joindate=document.getElementById("joindate").value;
  var location=document.getElementById("location").value;
  var jobtitle=document.getElementById("jobtitle").value;
  var department=document.getElementById("department").value;
  var manager=document.getElementById("manager").value;
  var project=document.getElementById("project").value;
  storeImage(empno);
  var imageurl;
  var temp=new Employee(empno,firstname,lastname,dob,mail,mobileno,joindate,location,jobtitle,department,manager,project,imageurl);
  employee_data.push(temp);
  localStorage.setItem("myKey", JSON.stringify(employee_data));
}

function checkEmpId(id){
for(let i of empIdList){
  if(i===id){
      alert("Id already exists");
  }
    return;
}

}
function storeImage(empno) {
const imageInput = document.getElementById('image');

if (imageInput && imageInput.files.length > 0) { // Check if file is selected
  const file = imageInput.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    localStorage.setItem(empno, reader.result); // Store Base64-encoded data
    console.log("Image stored in local storage.");
    // Optionally display the image:
    const newImage = document.getElementById('profile');
    if (newImage) {
      imageurl = reader.result;
      newImage.src=imageurl;
    }
  });
  reader.addEventListener('error', (error) => {
    console.error('Error reading image:', error);
    alert('An error occurred while reading the image. Please try again.');
  });
  reader.readAsDataURL(file); // Asynchronously read the file
}
 else {
  alert("Please select an image to upload.");
  }
}
function clear(){
  var element=document.getElementsByClassName("form-container");
  element.reset();
}

const addelement=document.querySelector(".addelement"),
      toast=document.querySelector(".toast")
      close=document.querySelector(".close"),
      progress=document.querySelector(".progress");

      addelement.addEventListener("click", ()=>{
      toast.classList.add("active");
      progress.classList.add("active");
  })
