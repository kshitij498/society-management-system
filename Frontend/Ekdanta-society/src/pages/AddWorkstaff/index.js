
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router'

const AddWorkStaff = () =>{
    let navigate = useNavigate();
    const [name, setName] = useState('')
    const [address, setAddress] = useState('') 
    const [email, setEmail] = useState('') 
    const [contactNo, setContactNo] = useState('') 
    const [role, setRole] = useState('')
    const [monthSalary, setMonthSalary] =useState('')  
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('') 

    const addWorkStaff = () =>{
        if(name.length===0){
            toast.warning('Please enter Name')
        }else if(address.length===0){
            toast.warning('Please enter Address')
        }else if(email.length===0){
            toast.warning('Please enter Email')
        }else if(contactNo.length===0){
            toast.warning('Please enter Contact No.')
        }else if(role.length===0){
            toast.warning('Please enter Role')
        }else if(monthSalary.length===0){
            toast.warning('Please enter Monthly Salary')
        }else if(password.length===0){
            toast.warning('Please enter Password')
        }else if(confirmPassword.length===0){
            toast.warning('Please confirm Password')
        }else if(password!==confirmPassword){
            toast.warning('Password does not match')
        }else{
            const body = {
                name,
                password,
                monthSalary,
                address,
                role,
                contactNo,
                email
            }
            const url = 'http://localhost:8080/WorkStaff/addWorkStaff'
            
           axios.post(url, body).then(response =>{
               const result = response.data

               if(result['status']=== 'success'){
                   toast.success('Successfully added!')
                   navigate("/workstaffs");
               }else{
                   toast.error(result['Error'])
               }
           })
        }
    } 
    return(
    <div>
         <br></br>
        <Link to="/workstaffs">Back</Link>
        <br></br>
        <h1><center><u>WorkStaff Details</u></center></h1>
        <br></br><br></br>

            
            <div className="row">
               
               <div className="col"></div>
               <div className="col">
               <div className="mb-3">
                <label htmlFor="" className="label-control">Name</label>
                <input onChange={(e)=>{
                    setName(e.target.value)
                }}
                type="text" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">Address</label>
                <input onChange={(e)=>{
                    setAddress(e.target.value)
                }} 
                type="text" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">Email</label>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                type="email" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">Contact No.</label>
                <input onChange={(e)=>{
                    setContactNo(e.target.value)
                }}
                 type="tel" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">Working Staff Role</label>
                <input onChange={(e)=>{
                    setRole(e.target.value)
                }} 
                type="text" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">Monthly Salary</label>
                <input onChange={(e)=>{
                    setMonthSalary(e.target.value)
                }} 
                type="text" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">Password</label>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                type="password" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">Confirm Password</label>
                <input onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                }} 
                type="password" className="form-control"></input>
            </div>
            <br></br>
            <div className="mb-3">
                <center>
                <button onClick={addWorkStaff} className="btn btn-primary">
                    
                    <h4>Add</h4></button>
                </center>
            </div>

               </div>
               <div className="col"></div>
                
            </div>
            
        

       
    </div>

    );
}

export default AddWorkStaff