import React from "react";
import './Part2.css';
const Part2 =({change,content}) => {
    const card = content.map((user,i)=>{
        return(
            <div key={i} className="form__group field">
                <h1>{content[i].Scode} - {content[i].Sname}</h1>
                <select name="Subject Grade" id={content[i].id} className="form__field" placeholder="Enter the grade" required >
                    <option value="O">O</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="E">E</option>
                </select>
            </div>
            );
    });
    return(
            <div>
                {card}
                <div className="Bottompart">
                <button id="aimpo" onClick={change} type="submit">Next</button>
                </div>
                
            </div>   
        );
}

export default Part2;