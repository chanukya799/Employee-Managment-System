import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployeeComponent() 
{
    const navigate=useNavigate();

    const [employee,setEmployee]=useState({
        id:"",
        firstName:"", 
        lastName:"",
        email:""     
    } )
    const saveHandler=(e)=>
    {
        e.preventDefault();
        console.log("employee=>"+JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res =>
        {
            navigate("/employees");
        })
    }

    const handleClick=(e)=>
    {
        const number=e.target.number;
        const name=e.target.name;
        const value=e.target.value;
        setEmployee({...employee,number,[name]:value});
    }    

    const cancelHandler=()=>
    {
        navigate("/employees");
    }

  return (
    <div className='container mt-4'>
        <div className='card w-50 offset-md-3'>
            <h2 className='text-center mt-3'>Add Employee</h2>
            <div className='card-body'>
                <form>
                <div className='form-group my-3'>
                        <label>ID No:</label>
                        <input type="number" name="id" id="id"
                        className='form-control' autoComplete="off"
                        value={employee.id} 
                        onChange={handleClick}/>
                        
                    </div>
                    <div className='form-group my-3'>
                        <label>First Name:</label>
                        <input type="text" name="firstName" id="firstName"
                        className='form-control' autoComplete="off"
                        value={employee.firstName}
                        onChange={handleClick}/>
                    </div>
                    <div className="form-group my-2">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" id="lastname"
                        className="form-control" autoComplete="off"                        
                        value={employee.lastName} 
                        onChange={handleClick}/>
                    </div>
                    <div className='form-group my-3'>
                        <label>Email:</label>
                        <input type="text" name="email" id="email"
                        className='form-control' autoComplete="off"
                        value={employee.email}
                        onChange={handleClick}/>
                    </div>
                    <button className='btn btn-success float-start' onClick={saveHandler}>save</button>
                    <button className='btn btn-danger float-end' onClick={cancelHandler}>cancel</button>
                </form>
            </div>
        </div>
    </div>
  )
}