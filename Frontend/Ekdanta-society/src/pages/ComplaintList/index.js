import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const ComplaintList = (props) => {
  const [complaint, setComplaint] = useState([])
  const [nocomplaint, setNoComplaint] = useState('')
  const [flag, setFlag] = useState(false)
  const[status,setStatus]=useState('')
const {state}=useLocation();
  useEffect(() => {
    const url = "http://localhost:8080/complaint/complaintlist"
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
          if(typeof result['data'] === 'string'){
            setNoComplaint(result['data'])
          }else{
            setComplaint(result['data'])
          }
      } else {
        toast.error(result['error'])
      }
    })
  }, [flag])

//   const updateStatus=(id)=>{
//       const url=`http://localhost:8080/complaint/updatestatus/${id}`
//       axios.put(url,{ headers: {
//         'Content-Type': 'text/plain;charset=utf-8',
//     }}).then((response) => {
//       const result = response.data
//       if (result['status'] == 'success') {
//         toast.success("Status updated successfully")
//       } else {
//         toast.error(result['error'])
//       }
//     })  
//   }

//   const deleteComplaint=()=>{
//     const url = `http://localhost:8080/complaint/deletebyid/${item.id}`
//     axios.delete(url,{ headers: {
//         'Content-Type': 'text/plain;charset=utf-8',
//     }}).then((response) => {
//       const result = response.data
//       if (result['status'] == 'success') {
//         toast.success("user successfully deleted")
//       } else {
//         toast.error(result['error'])
//       }
//     })  
//   }

    

  return (
      <>
     <br></br>
      <h1><center><u>Complaints List</u></center></h1>
      <br></br><br></br>
      <Link to='/home'>Back</Link>

    <table class="table" id="customers">
    <thead class="thead-light">
    <br></br>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Complaint</th>
        <th scope="col">Status</th>
        <th scope="col">Action by Secretary</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {nocomplaint === "" ?
            complaint.map((item,i)=>{
                return(
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{item.ownerFirstName}</td>
                        <td>{item.ownerLastName}</td>
                        <td>{item.complaint}</td>
                        <td>{item.status}</td>
                        
                        <td>{item.status !== 'COMPLETED' &&<button 
                              const onClick={()=>{
                                  const body = {
                                    complaint:item.complaint,
                                      status:'COMPLETED',
                                  }
                                    // onchange={(e) => {
                                    //     setStatus(e.target.value);
                                    // }}
                                {const url=`http://localhost:8080/complaint/updatestatus/${item.id}`
                                axios.put(url,body)
                            //     ,{ headers: {
                            //       'Content-Type': 'text/plain;charset=utf-8',
                            //   }})
                            .then((response) => 
                            {   
                                const result = response.data
                                if (result['status'] == 'success') {
                                  toast.success("Status updated successfully")
                                  setFlag(flag===true?false:true);
                                } else {
                                  toast.error(result['error'])
                                }
                              })  
                            }}}
                        type="button" class="btn btn-secondary" >Update</button>}</td>



                        <td><button
                           const onClick ={()=>{
                                {const url = `http://localhost:8080/complaint/deletebyid/${item.id}`
                                axios.delete(url)
                                // { headers: {
                                //     'Content-Type': 'text/plain;charset=utf-8',
                                // }})
                                .then((response) => {
                                  const result = response.data
                                  if (result['status'] == 'success') {
                                    toast.success("user successfully deleted")
                                    window.location.reload()
                                  } 
                                })  
                              }}}
                        type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                )
            }) :
            <tr>
                <td colSpan={6}>
                    <h2>{nocomplaint}</h2>
                </td>
            </tr>
            
        }
    </tbody>
  </table>
  </>
  )
}

export default ComplaintList
