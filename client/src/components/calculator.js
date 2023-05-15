import React from "react";
import {useState, useEffect} from 'react';
import Axios from "axios";
import {calcSchema} from '../validations/CalcValidations';
import {useNavigate, useParams} from "react-router-dom";


export  default function Calculator () {
    const [listofCalcs, setListOfCalcs] = useState([]);
    const [listofFilteredCalcs, setListOfFilteredCalcs] = useState([]);
    const [resname,setResname] = useState("");
    const [surfarea,setSurfarea] = useState(0);
    const [methaneprod,Setmethaneprod] = useState("");
    const [error,setError] = useState("");
    let navigate = useNavigate();
    let {username} = useParams();

    useEffect( ()=> {
        Axios.get("http://localhost:3001/calculator/getCalc").then((response)=>{
          setListOfCalcs(response.data);
          setListOfFilteredCalcs(response.data);
        });
      }, []);

    const updateCalc = (id) => {
        const newResName = prompt("Enter new reservoir name: ");
    
        Axios.put("http://localhost:3001/calculator/update",{newResName: newResName,id:id}).then(
          ()=>{
          setListOfCalcs(
            listofCalcs.map((calcs) => {
            return calcs._id === id 
            ? {_id: id, resname: newResName, surfarea:calcs.surfarea ,methaneprod: calcs.methaneprod} : calcs;
          }))
        })
    
    };

    const formatDate = (dateString) => {
      const options = {year: 'numeric', month: '2-digit',day: '2-digit'};
      return new Date(dateString).toLocaleDateString(undefined, options)
    }
    
    const deleteCalc = (id) => {
        Axios.delete(`http://localhost:3001/calculator/delete/${id}`);
        window.location.reload();
    }

    const createCalc = async(event,document) => {
        event.preventDefault();
        let formdata = {
          fresname: event.target[0].value,
          fsurfarea: event.target[1].value
        };

        

        const isValid = await calcSchema.isValid(formdata);

        
        if(isValid){
            const methanecalc = surfarea*0.2225;
            Axios.post("http://localhost:3001/calculator/addCalc", {
            resname: resname,
            surfarea: surfarea,
            methaneprod: methanecalc,
          }).then((response) =>{
            alert("Added Successfully!!");
            setListOfCalcs([...listofCalcs, {resname,surfarea,methanecalc,}]); 
            window.location.reload();
          })
        }
        else setError("Incorrect inputs");
    };

    return (
        <div>
  
          <div className="PmsApp">
              
              <div className="userDisplay">
                
                  <div className='inputs'>
                    <span>Calculate Methane emissions: </span>
                    <form onSubmit={createCalc}>
                      <label>reservoir name: </label>
                      <input 
                        type="text" 
                        placeholder="Reservoir name..." 
                        onChange={(event)=>{
                        setResname(event.target.value);
                        }}
                      />
                      <label>surface area (Hectares): </label>
                      <input 
                        type="number" 
                        placeholder="surface area..."
                        onChange={(event)=>{
                          setSurfarea(event.target.value);
                          }}
                      />
                      
                      {/* <input 
                      type="number" 
                      placeholder="methane prod..."
                      onChange={(event)=>{
                        Setmethaneprod(event.target.value);
                        }} */}
                   
    
                      <button type="submit">CALCULATE!!!</button>
                      
                    </form>
                    <span className='error-msg'>{error}</span>
                  </div>
                  
  
                  <div className='DBdisplay'>
                     <table className='table'>
                        <thead>
                        <tr><th>Reservoir name</th><th>surface area(Hectare)</th><th>methane prod(kgCH4/Hectare)</th><th> ID</th><th></th></tr>
                        </thead>
                        <tbody>
                          {listofCalcs.map((calcs)=>{
                            return(  
                                <tr>
                                  <td>{calcs.resname}</td>
                                  <td>{calcs.surfarea}</td>
                                  <td>{calcs.methaneprod}</td>
                                  {/* <td>{formatDate(calcs.addedOn)}</td> */}
                                  <td>{calcs._id}</td>
                                  <td>
                                    <button onClick={()=>{updateCalc(calcs._id)}}>update</button>
                                    <button onClick={()=>{deleteCalc(calcs._id)}}>X</button>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                   </div>
              
              </div>
          </div>
        </div>
      );
  }
  
