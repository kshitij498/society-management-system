
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Updatecomplaintstatus = ()=> {
    const [status,setStatus] = useState('')
     //used to navigate from one component to other
  // const navigate=useNavigate()

  const updatecomplaint = () => {
     if (status.lenght===0){
          toast.warning('please enter the month')
      }else{
        const body = {
        
          status
     }
     // url to call api
        const url="http://localhost:8080/complaint/updatestatus/{id}"

       // http method: post
      // body: contains the data to be sent to the API
      axios.put(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
          toast.success('Successfully update status')

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
    <Link to='/home'>Back</Link>

    <div className="row">
        <div className="col"></div>
        <div className="col">
        <h1 className='title'>Update Status</h1>
          <div className="form">

               <div className="mb-3">
              <label htmlFor="" className="label-control">
                Status
              </label>
              <input
                 onChange={(e) => {
                    setStatus(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

           

         

            <div className="mb-3">
             
              <button  onClick={updatecomplaint} className="btn btn-primary">
                Update Status
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
    )
}


export default Updatecomplaintstatus
