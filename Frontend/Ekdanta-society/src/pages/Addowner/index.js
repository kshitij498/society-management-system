
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Addowner = ()=> {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [role, setRole] = useState('')
    const [address, setAddress] = useState('')
    //used to navigate from one component to other
   const navigate=useNavigate()

  const addowner = () => {
      if(firstName.length===0){
        toast.warning('Please enter first name')
      }else if (lastName.lenght===0){
          toast.warning('please enter the last name')
      }else if (password.length===0){
        toast.warning('please enter the password')
    }else if (confirmPassword.length===0){
        toast.warning('please enter the confirm password')
    }else if (confirmPassword!==password){
            toast.warning('please enter correct password')
    }else if (mobileNo.length===0){
        toast.warning('please enter the mobile number')
    }
    else if(email.length===0){
        toast.warning("please enter the email")
    }else if (dob.length===0){
        toast.warning('please enter the date of birth')
    }else if (gender.length===0 || gender==='...'){
        toast.warning('please enter the gender')
    }else if (address.length===0){
        toast.warning('please enter the address')
    }else if (role.length===0){
        toast.warning('please enter the role')
    }else{
        const body = {
        firstName:firstName,
        lastName:lastName,
        email,
        password,
        mobileNo,
        dob,
        gender,
        address,
        role
        }
     // url to call api
        const url="http://localhost:8080/owner/signup"

       // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
          toast.success('Successfully signed up new owner')

          // navigate to the signin page
         navigate('/users')
        } else {
          toast.error(result['error'])
        }
      })
        
    }
      
  }
    
    return(
        <div>
           <br></br>
    <Link to="/users">Back</Link>

    <div className="row">
        <div className="col"></div>
        <div className="col">
        <h1 className='title'><u>Add Owner</u></h1>
        <br></br>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
            onChange={(e) => {
                setFirstName(e.target.value)
            }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                 onChange={(e) => {
                    setLastName(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email Address
              </label>
              <input
                 onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Contact Number
              </label>
              <input
                 onChange={(e) => {
                    setMobileNo(e.target.value)
                }}
                type="tel"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Date Of Birth
              </label>
              <input
                 onChange={(e) => {
                    setDob(e.target.value)
                }}
                type="Date"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Gender
              </label>
              <select onChange={(e) => {
                    setGender(e.target.value)

                }}>
                <option>...</option>
                 <option>Male</option>
                 <option>Female</option>
             </select>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Address
              </label>
              <input
                 onChange={(e) => {
                    setAddress(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Role
              </label>
              <input
                  onChange={(e) => {
                    setRole(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
            <center>
              <button  onClick={addowner} className="btn btn-primary">
              <h4>Add</h4>
              </button></center>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
    )
}


export default Addowner