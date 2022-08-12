import React from "react";
import './Part1.css';
const Part1 = ({change,semno,dept,changecontent}) =>{
        return(
            <div>
                <div className="form__group field">
                    <h1>Name</h1>
                    <input type="input" className="form__field" placeholder="Type Name" name="name" id="name" required /> 
                </div>
                <div className="form__group field">
                    <h1>Roll No</h1>
                    <input type="text" className="form__field" placeholder="Type Roll No" name="Rollno" id="Rollno" required /> 
                </div>
                <div className="form__group field">
                    <h1>DOB</h1>
                    <input type="date" className="form__field" name="DOB" id="DOB" required /> 
                </div>
                <div className="form__group field">
                    <h1>Semester No</h1>
                    <input type="number" className="form__field" onChange={semno} min="1" max="8" placeholder="Type Sem no." name="Sem" id="Sem" required /> 
                    <p id="Para"></p>
                </div>
                <div className="form__group field">
                    <h1>Dept</h1>
                    <select name="DEPT" className="form__field" placeholder="Enter the grade" onChange={dept} onClick={changecontent} required >
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                    </select> 
                </div>
                <div className="Bottompart" onClick={changecontent}>
                    <a href="/GPA" onClick={change}>To Calculate CGPA</a>   
                    <button id="aimpo" onClick={change} type="submit">Next</button>
                </div>
            </div>
        );
}
export default Part1;