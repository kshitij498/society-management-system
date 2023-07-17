import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Signin= () => {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const navigate=useNavigate()

const signin= () => {
    if(email.length===0){
        toast.warning("please enter email")
    }else if(password.length===0){
        toast.warning("please enter password")
    }else {
        const body ={
            email,
            password
        }

       const url="http://localhost:8080/staff/signin"

       axios.post(url,body).then(response =>{
          // get the server result
          const result = response.data
          console.log(result)
          if (result['status'] === 'success') {
              toast.success('Welcome to the application')

              // get the data sent by server
              const { id, name,
        
                email,
                password,
                contactNo,
                monthSalary,
                address,
                role } = result['data']

              // persist the logged in user's information for future use
              sessionStorage['id'] = id
              sessionStorage['name'] = name
             
              sessionStorage['email']=email
              sessionStorage['password']=password
              sessionStorage['contactNo']=contactNo
              sessionStorage['monthSalary']=monthSalary
              sessionStorage['address']=address
              sessionStorage['role']=role
              sessionStorage['loginStatus']=1

              // navigate to home component
              navigate('/home')
          }
               else{
            toast.warning('invalid user name or password')
               }

           
       })


    }
}
    
    return(
        <div>
           

            <div className="container">
  <div className="row">
    <div className="col">
    
    </div>
    <div className="col">

    <h1>Workstaff Signin</h1>
    <div className="form">

<div className="mb-3">
   <label for="exampleInputEmail1" className="form-label">Email address</label>
   <input onChange={(e) =>{setEmail(e.target.value)}} 
   type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   <div id="emailHelp" className="form-text"></div>
 </div>

 <div class="mb-3">
   <label for="exampleInputPassword1" className="form-label">Password</label>
   <input  onChange={(e) =>{setPassword(e.target.value)}}
   type="password" class="form-control" id="exampleInputPassword1"/>
 </div>
 
 
 <div className="mb-3">
 <button type="button" onClick={signin} className="btn btn-primary">Login</button>
 </div>

 <Link to='/signin'>Signin Owner</Link>
</div>
    </div>
    <div className="col">
      
    </div>
  </div>
</div>
       
            
        </div>
    )
}
export default Signin