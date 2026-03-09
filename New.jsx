import React from 'react'
import './New.css';

function New() {

  function addData(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let mobile=document.getElementById("mobile").value;
let course=document.getElementById("course").value;
let city=document.getElementById("city").value;

let genderElement=document.querySelector('input[name="gender"]:checked');

let gender = genderElement ? genderElement.value : "Not Selected";

let studentData = {
name,
email,
mobile,
gender,
course,
city
};

console.table(studentData);

}
  return (
    <div>
    <h2>Student Registration Form</h2>

<form>

Name:
<input type="text" id="name"/>

Email:
<input type="email" id="email"/>

Mobile:
<input type="text" id="mobile"/>

Gender:
<input type="radio" name="gender" value="Male"/>Male
<input type="radio" name="gender" value="Female"/>Female

<br/><br/>

Course:
<select id="course">
<option>BCA</option>
<option>BBA</option>
<option>BSc</option>
<option>MCA</option>
</select>

City:
<input type="text" id="city"/>

{/* <button type="button" onclick="addData()">Submit</button> */}
<button type="button" onClick={addData}>Submit</button>
</form>


</div>

  )
}

export default New