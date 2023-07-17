import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const GetWorkStaff = (props) => {
  const [workstaff, setWorkStaff] = useState([])

  useEffect(() => {
    const url = "http://localhost:8080/WorkStaff/workstafflist"
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setWorkStaff(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }, [])

//   const deleteOwner=(id)=>{
//     const url = `http://localhost:8080/WorkStaff/deleteworkstaff/${id}`
//     axios.get(url,{ headers: {
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
      <h1><center><u>WorkStaff Details</u></center></h1>
      <br></br><br></br>
      <Link to='/home'>Back</Link>
      <Link to='/addworkstaff'  className="float-end" >Add Workstaff</Link>
    <table class="table" id="customers">
    <thead class="thead-light">
    <br></br>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Contact No</th>
        <th scope="col">Salary</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {
            workstaff.map((item,i)=>{
                return(
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.contactNo}</td>
                        <td>{item.monthSalary}</td>
                        <td><button
                           const onClick ={()=>{
                                {const url = `http://localhost:8080/WorkStaff/deleteworkstaff/${item.id}`
                                axios.delete(url)
                                // { headers: {
                                //     'Content-Type': 'text/plain;charset=utf-8',
                                // }})
                                .then((response) => {
                                  const result = response.data
                                  if (result['status'] == 'success') {
                                    toast.success("workstaff successfully deleted")
                                    window.location.reload()
                                  } 
                                })  
                              }}}
                        type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                )
            })
        }
    </tbody>
  </table>
  </>
  )
}

export default GetWorkStaff
