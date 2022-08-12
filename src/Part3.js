import React from "react";
const Part3 = ({content,change}) => {
    const Condi = () => {
        var total=0;
        var creearn=0;
        content.map((user,i) =>{
            var sub1 = document.getElementsByTagName("select")[i];
            var GP = 0;
            var x = 1;
            if(sub1.value === "O"){
                GP=10;
                x = content[i].credit*GP;
            }
            else if(sub1.value === "A+"){
                GP=9; 
                x = content[i].credit*GP;
            }
            else if(sub1.value === "A"){
                GP=8;
                x = content[i].credit*GP;
            }
            else if(sub1.value === "B+"){
                GP=7;
                x = content[i].credit*GP;
            }
            else if(sub1.value === "B"){
                GP=6;
                x = content[i].credit*GP;
            }
            else{
                GP=0;
                x=0;
                creearn=creearn-content[i].credit
            }
            creearn=creearn+content[i].credit;
            total=total+x;
            return 0;
        })
        total=total/creearn; 
        return <div>{total}</div>;
    } 
    return(
        <div>
            <h1>Your GPA is <Condi /></h1>
        </div>
    );
}
export default Part3;
