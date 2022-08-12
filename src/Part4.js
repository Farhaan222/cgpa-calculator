import React from "react";
const Part3 = ({change}) => {
    return(
        <div>
            <h1>Select no.of semesters</h1>
            <select className="form__field" required >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="All">All</option>
            </select>
            <div className="Bottompart">
                <button id="aimpo" onClick={change} type="submit">Next</button>
            </div>
        </div>
    );
}
export default Part3; 