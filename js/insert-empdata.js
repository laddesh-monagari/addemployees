const empIdList = [ "TZ002347", "TZ002348", "TZ002349", "TZ002350"];
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
    this.joiningDate = joindate;
    this.location = location;
    this.jobTitle = jobtitle;
    this.department = department;
    this.manager = manager;
    this.project = project;
    this.imageurl = imageurl;
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
  console.log(joindate);
  var object=new Employee(empno,firstname,lastname,dob,mail,mobileno,joindate,location,jobtitle,department,manager,project,imageurl);
  employee_data.push(object);
  localStorage.setItem("myKey", JSON.stringify(employee_data));
  localStorage.setItem("idList",JSON.stringify(empIdList));
  showtoast("Success","Employee has been added","green");
}

function checkEmpId() {
  var id=document.getElementById("empno").value;
  for (let i of empIdList) {
    if (i === id) {
      showtoast("ID Exists","Employee ID already exists","yellow");
      return false;
    }
  }
  if(id.length!==8){
    showtoast("Wrong ID Format","Enter proper 8 digit","red");
    return false;
  }
  return true
}

function storeImage(empno) {
const imageInput = document.getElementById('image');
if (imageInput && imageInput.files.length > 0) { 
  const file = imageInput.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    localStorage.setItem(empno, reader.result);
    console.log("Image stored in local storage.");
    const newImage = document.getElementById('profile');
    if (newImage) {
      imageurl = reader.result;
      newImage.src=imageurl;
    }
  });
  reader.addEventListener('error', (error) => {
    console.error('Error reading image:', error);
    alert('Error occurred during the image loading. Please try again.');
  });
  reader.readAsDataURL(file);
  }
 else {
  alert(" select an image to upload.");
  }
}
// function clear(){
//   var element=document.getElementsByClassName("form-container");
//   element.reset();
// }

const submitButton = document.getElementById("addelement");
const empnoInput = document.getElementById("empno");
const firsttNameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const mailInput = document.getElementById("mail");
const mobilenoInput = document.getElementById("mobileno");
const joindate = document.getElementById("joindate");
submitButton.disabled = true; 
empnoInput.addEventListener("change", updateButtonState);
firsttNameInput.addEventListener("change", updateButtonState);
lastnameInput.addEventListener("change", updateButtonState);
mailInput.addEventListener("change", updateButtonState);
mobilenoInput.addEventListener("change", updateButtonState);
joindate.addEventListener("change", updateButtonState);
function updateButtonState() {
  checkEmpId();
  submitButton.disabled = !( empnoInput.value && firsttNameInput.value && lastnameInput.value && mailInput.value 
                              && mobilenoInput.value && joindate.value );
} 
function cancel(){
  window.history.back();
}
/*toast-Notification*/
const button = document.getElementById("addelement"),
      toast = document.querySelector(".toast")
      closeIcon = document.querySelector(".close"),
      progress = document.querySelector(".progress");
      let timer1, timer2;
      function showtoast(result="Progress",resultText="Complete Form",color="blue"){
        document.getElementsByClassName("text-1")[0].innerText=result;
        document.getElementsByClassName("text-2")[0].innerText=resultText;
        document.documentElement.style.setProperty('rgb(64, 112, 244)',color);
        toast.classList.add("active");
        progress.classList.add("active");
        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000);
        timer2 = setTimeout(() => {
          progress.classList.remove("active");
        }, 5300);
      }     
      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
      setTimeout(() => {
        progress.classList.remove("active");
      }, 300);
      clearTimeout(timer1);
      clearTimeout(timer2);
});
