import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const MaintenanceList = (props) => {
  const [maintenance, setMaintenance] = useState([])

  useEffect(() => {
    const url = "http://localhost:8080/maintenance/maintenancelist"
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setMaintenance(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }, [])

//   const deleteMaintenance=(id)=>{
//     const url = `http://localhost:8080/maintenance/deletebyid/${id}`
//     axios.get(url,{ headers: {
//         'Content-Type': 'text/plain;charset=utf-8',
//     }}).then((response) => {
//       const result = response.data
//       if (result['status'] == 'success') {
//         toast.success("Maintenance successfully deleted")
//       } else {
//         toast.error(result['error'])
//       }
//     })  
//   }

    

  return (
      <>
     <br></br>
        <h1><center><u>Maintenance Details</u></center></h1>
        <br></br><br></br>
      <Link to='/home'>Back</Link>
      <Link to='/addmaintenance'  className="float-end">Add Maintenance</Link>
    <table class="table" id="customers">
    <thead class="thead-light">
    <br></br>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">flat No</th>
        <th scope="col">Wing</th>
        <th scope="col">FlatMaintenance</th>
        <th scope="col">Parking Bill</th>
        <th scope="col">WaterBill</th>
        <th scope="col">other</th>
        <th scope="col">Total</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {
            maintenance.map((item,i)=>{
                return(
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{item.ownerFirstName}</td>
                        <td>{item.ownerLastName}</td>
                        <td>{item.flatNo}</td>
                        <td>{item.wing}</td>
                        <td>{item.flatMaintenance}</td>
                        <td>{item.parkingBill}</td>
                        <td>{item.waterBill}</td>
                        <td>{item.others}</td>
                        <td>{item.total}</td>
                        <td><button
                           const onClick ={()=>{
                                {const url = `http://localhost:8080/maintenance/deletebyid/${item.id}`
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
            })
        }
    </tbody>
  </table>
  </>
  )
}

export default MaintenanceList
