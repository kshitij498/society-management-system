
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Addcomplaint = ()=> {
    const [complaint,setComplaint] = useState('')

  const addcomplaint = () => {
      if(complaint.length===0){
        toast.warning('Please enter complaint')
      }else{
        const body = {
          complaint,
          status : 'PENDING',
          ownerId : sessionStorage.getItem('id')
     }
     // url to call api
        const url="http://localhost:8080/complaint/addcomplaint"

       // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
          toast.success('Successfully added complaint')

          // navigate to the signin page
          //navigate('/signin')
        } else {
          toast.error(result['error'])
        }
      })
        
    }
      
  }
    
    return(
        <div>
    
      <br></br>
    <Link to='/home'>Back</Link>
    <div className="row">
        <div className="col"></div>
        <div className="row">
        <h1 className='title'><u>Add Complaint</u></h1>
        
          <div className="form">
            <div className="mb-4">
              <label htmlFor="" className="label-control">
              <br></br>
                <h2>Complaint</h2>
                <br></br>
              </label>
              <input
            onChange={(e) => {
                setComplaint(e.target.value)
            }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
             
              <button  onClick={addcomplaint} className="btn btn-primary">
               <h3>Add</h3> 
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
    )
}


export default Addcomplaint
