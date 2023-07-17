import { useState } from 'react'
//import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import coverImage from './images.jpg'
const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({ email: '', password: '' })
    const navigate = useNavigate()

    const signin = () => {
        setError('')
        let emailError = '', passwordError = ''
        if (email.length === 0) {
            emailError = '*Please Enter Email'
        } if (password.length === 0) {
            passwordError = '*Please Enter Password'
        } else {
            const body = {
                email,
                password
            }

            const url = "http://localhost:8080/owner/signin"

            axios.post(url, body).then(response => {
                // get the server result
                const result = response.data
                console.log(result)
                if (result['status'] === 'success') {
                    toast.success('Welcome to Ekdanta Society')

                    // get the data sent by server
                    const { id, firstName,
                        lastName,
                        email,
                        password,
                        mobileNo,
                        dob,
                        gender,
                        address,
                        role } = result['data']

                    // persist the logged in user's information for future use
                    sessionStorage['id'] = id
                    sessionStorage['firstName'] = firstName
                    sessionStorage['lastName'] = lastName
                    sessionStorage['email'] = email
                    sessionStorage['password'] = password
                    sessionStorage['mobileNo'] = mobileNo
                    sessionStorage['dob'] = dob
                    sessionStorage['gender'] = gender
                    sessionStorage['address'] = address
                    sessionStorage['role'] = role
                    sessionStorage['loginStatus'] = 1

                    // navigate to home component
                    navigate('/home')
                }
                else {
                    setError({ email: 'Invalid Details', password: 'Invalid Details' })
                }
            })
        }
        setError({ email: emailError, password: passwordError })
    }

    const handleChange = (value, field) => {
        let email = '', password = ''
        if (field === 'email') {
            setEmail(value)
            if (value.length < 1) {
                email = '*Please Enter Email'
            }
        } else {
            setPassword(value)
            if (value.length < 1) {
                password = '*Please Enter Password'
            }
        }
        setError({ email, password })
    }
    return (
        <div className='page-container' >
            <div className='cover'>
                <img src={coverImage} alt="" />
            </div>
            <div className='form-container'>
                <div className='new-user' >
                </div>
                <br></br><br></br><br></br><br></br>
                <h1>
                    <i>Ekdanta Society</i>
                    </h1>
                <div className='form-content' >
                    <h1 style={{ color: '#ffd700', margin: '20px', paddingLeft: '50px' }}><b>Sign In</b></h1>
                    <div><label style={{ color: '#360d4b', margin: '10px 10px 0px 10px' }} for="exampleInputEmail1" className="form-label"><h5>Email Address</h5></label>
                    </div><input
                        style={{ color: '#360d4b', margin: '10px 10px 0px 10px' }}
                        onChange={(e) => handleChange(e.target.value, 'email')}
                        type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email address' />
                    <span style={{ color: '#9b1e1e' }}>{error.email}</span>
                    <label style={{ color: '#360d4b', margin: '20px 10px 0px 10px' }} for="exampleInputPassword1" className="form-label"><h5>Password</h5></label>
                    <input style={{ color: '#360d4b', margin: '10px 10px 0px 10px' }} onChange={(e) => handleChange(e.target.value, 'password')}
                        type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter password' />
                    <span style={{ color: '#9b1e1e' }}>{error.password}</span>
                    <div >
                        <div className='singinButton' style={{ paddingLeft: '87px', margin: '35px' }}>
                            <button type="button" onClick={signin} className={password && email ? "btn btn-primary" : "btn btn-secondary"}>
                                <h5><b><i>Login</i></b></h5></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signin