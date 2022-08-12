import React from "react";
import './Background.css';
import './arror.png';
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import {sem2cs} from './jsfiles-master/2CSE';
import {sem2ece} from './jsfiles-master/2ECE';
import {sem2eee} from './jsfiles-master/2EEE';
import {sem3cs} from './jsfiles-master/3CSE';
import {sem3ece} from './jsfiles-master/3ECE';
import {sem3eee} from './jsfiles-master/3EEE';
import {sem4cs} from './jsfiles-master/4CSE';
import {sem4ece} from './jsfiles-master/4ECE';
import {sem4eee} from './jsfiles-master/4EEE';
import {sem5cs} from './jsfiles-master/5CSE';
import {sem5ece} from './jsfiles-master/5ECE';
import {sem5eee} from './jsfiles-master/5EEE';
import {sem6cs} from './jsfiles-master/6CSE';
import {sem6ece} from './jsfiles-master/6ECE';
import {sem6eee} from './jsfiles-master/6EEE';
import { content } from "./content";
class Background extends React.Component{
    constructor(){
        super()
        this.state={
            change : 0,
            dept : "CSE", 
            semno : '1',
            arr: []
        }
    }
    gettingeventfrompart2 = (event)=>{
        if(this.state.change===0){
            this.setState({change : 1})
        }
        else if(this.state.change===1){
            this.setState({change : 2})
        }
        else{
            this.setState({change : 0})
        }
    }
    gettingeventfrompart1semno = (event)=>{
        this.setState({semno : event.target.value});
        if(event.target.value > 8){
            document.getElementById("Para").innerHTML="Semno Should not be more than 8";
        }
        if(event.target.value < 1){
            document.getElementById("Para").innerHTML="Semno Should not be less than 1";
        }
        if(event.target.value <= 8 && event.target.value >= 1){
            document.getElementById("Para").innerHTML="";
        }
    }  
    gettingeventfrompart1dept = (event)=>{
        this.setState({dept : event.target.value});
    }
    passingcontent = (event)=>{
        if(this.state.semno === '1' ){
            content.map((user,i) => {
                var a=[
                    {
                        Scode:"",
                        Sname:"",
                        credit: 0,
                    }
                ]
                a.Scode = content[i].Scode;
                a.Sname = content[i].Sname;
                a.credit = content[i].credits;
                this.state.arr[i] = a;
                return 0;
            })
        }
        else if(this.state.semno === '2'){
            if(this.state.dept === "CSE"){
                sem2cs.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem2cs[i].Scode;
                    a.Sname = sem2cs[i].Sname;
                    a.credit = sem2cs[i].credit;
                    this.state.arr[i] = a;
                    return 0;
                })
                
            }
            else if(this.state.dept === "ECE"){
                sem2ece.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem2ece[i].Scode;
                    a.Sname = sem2ece[i].Sname;
                    a.credit = sem2ece[i].credit;
                    this.state.arr[i] = a;
                    return 0;             
                })
            }
            else if(this.state.dept === "MECH"){
            }
            else if(this.state.dept === "EEE"){
                sem2eee.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem2eee[i].Scode;
                    a.Sname = sem2eee[i].Sname;
                    a.credit = sem2eee[i].credit;
                    this.state.arr[i] = a;
                    return 0;
               })      
            }
            else{
                console.log("Error Occured")
            }}
        else if(this.state.semno === '3'){
                if(this.state.dept === "CSE"){
                    sem3cs.map((user,i) => {
                        var a=[
                            {
                                Scode:"",
                                Sname:"",
                                credit: 0,
                            }
                        ]
                        a.Scode = sem3cs[i].Scode;
                        a.Sname = sem3cs[i].Sname;
                        a.credit = sem3cs[i].credit;
                        this.state.arr[i] = a;
                        return 0;
                    })
                    
                }
                else if(this.state.dept === "ECE"){
                    sem3ece.map((user,i) => {
                        var a=[
                            {
                                Scode:"",
                                Sname:"",
                                credit: 0,
                            }
                        ]
                        a.Scode = sem3ece[i].Scode;
                        a.Sname = sem3ece[i].Sname;
                        a.credit = sem3ece[i].credit;
                        this.state.arr[i] = a;
                        return 0;                 
                    })
                }
                else if(this.state.dept === "MECH"){
                }
                else if(this.state.dept === "EEE"){
                    sem3eee.map((user,i) => {
                        var a=[
                            {
                                Scode:"",
                                Sname:"",
                                credit: 0,
                            }
                        ]
                        a.Scode = sem3eee[i].Scode;
                        a.Sname = sem3eee[i].Sname;
                        a.credit = sem3eee[i].credit;
                        this.state.arr[i] = a;
                        return 0;
                   })      
                }
                else{
                    console.log("Error Occured")
                }
        }
        else if(this.state.semno === '4'){
            if(this.state.dept === "CSE"){
                sem4cs.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem4cs[i].Scode;
                    a.Sname = sem4cs[i].Sname;
                    a.credit = sem4cs[i].credit;
                    this.state.arr[i] = a;
                    return 0;
                })
                
            }
            else if(this.state.dept === "ECE"){
                sem4ece.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem4ece[i].Scode;
                    a.Sname = sem4ece[i].Sname;
                    a.credit = sem4ece[i].credit;
                    this.state.arr[i] = a;
                    return 0;                  
                })
            }
            else if(this.state.dept === "MECH"){
            }
            else if(this.state.dept === "EEE"){
                sem4eee.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem4eee[i].Scode;
                    a.Sname = sem4eee[i].Sname;
                    a.credit = sem4eee[i].credit;
                    this.state.arr[i] = a;
                    return 0;
               })      
            }
            else{
                console.log("Error Occured")
            }
        }
        else if(this.state.semno === '5'){
            if(this.state.dept === "CSE"){
                sem5cs.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem5cs[i].Scode;
                    a.Sname = sem5cs[i].Sname;
                    a.credit = sem5cs[i].credit;
                    this.state.arr[i] = a;
                    return 0;
                })
                
            }
            else if(this.state.dept === "ECE"){
                sem5ece.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem5ece[i].Scode;
                    a.Sname = sem5ece[i].Sname;
                    a.credit = sem5ece[i].credit;
                    this.state.arr[i] = a;
                    return 0;                 
                })
            }
            else if(this.state.dept === "MECH"){
            }
            else if(this.state.dept === "EEE"){
                sem5eee.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem5eee[i].Scode;
                    a.Sname = sem5eee[i].Sname;
                    a.credit = sem5eee[i].credit;
                    this.state.arr[i] = a;
                    return 0;
               })      
            }
            else{
                console.log("Error Occured")
            }
        }
        else if(this.state.semno === '6'){
            if(this.state.dept === "CSE"){
                sem6cs.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem6cs[i].Scode;
                    a.Sname = sem6cs[i].Sname;
                    a.credit = sem6cs[i].credit;
                    this.state.arr[i] = a;
                    return 0;
                })
                
            }
            else if(this.state.dept === "ECE"){
                sem6ece.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem6ece[i].Scode;
                    a.Sname = sem6ece[i].Sname;
                    a.credit = sem6ece[i].credit;
                    this.state.arr[i] = a;
                    return 0;                 
                })
            }
            else if(this.state.dept === "MECH"){
            }
            else if(this.state.dept === "EEE"){
                sem6eee.map((user,i) => {
                    var a=[
                        {
                            Scode:"",
                            Sname:"",
                            credit: 0,
                        }
                    ]
                    a.Scode = sem6eee[i].Scode;
                    a.Sname = sem6eee[i].Sname;
                    a.credit = sem6eee[i].credit;
                    this.state.arr[i] = a;
                    return 0;
               })      
            }
            else{
                console.log("Error Occured")
            }
        }
        else{
            console.log("Error Occured")
        }
    }  
    card3 = () =>{
        if(this.state.change===0)
        {

            return <Part1 change={this.gettingeventfrompart2} changecontent = {this.passingcontent} semno={this.gettingeventfrompart1semno} dept={this.gettingeventfrompart1dept}/>
        }
        else if(this.state.change===1){

            return <Part2 change={this.gettingeventfrompart2} content={this.state.arr}/>
        }
        else{
            return <Part3 content={this.state.arr} change={this.gettingeventfrompart2}/>
        }
    }
    render(){
        return(
            <div className="Box">
                <h1>CGPA - CALCULATOR</h1>
                <this.card3></this.card3>
            </div>  
        );
    }
}
export default Background;