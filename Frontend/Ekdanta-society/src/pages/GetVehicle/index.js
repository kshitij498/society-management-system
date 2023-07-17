import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const GetVehicle = (props) => {
  const [vehicle, setVehicle] = useState([])

  useEffect(() => {
    const url = `http://localhost:8080/society/getFlat/${sessionStorage.getItem("id")}`
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setVehicle(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }, [])

//   const deleteVehicle=(id)=>{
//     const url = `http://localhost:8080/vehicle/${id}`
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
      <h1><center><u>Vehicle Details</u></center></h1>
      <br></br><br></br>
     
      <Link to='/home'>Back</Link>
      <Link to='/addvehicle'  className="float-end">Add Vehicle</Link>
    <table class="table" id="customers">
    <thead class="thead-light">
    <br></br>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Vehicle No</th>
        <th scope="col">Flat No</th>
        <th scope="col">Wing</th>
        
        
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {
            vehicle.map((item,i)=>{
                return(
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{item.ownerFirstName}</td>
                        <td>{item.ownerLastName}</td>
                        <td>{item.vehicle.vehicleNo? item.vehicle.vehicleNo:"NOT REGISTER"}</td>
                        <td>{item.flatNo}</td>
                        <td>{item.wing}</td>
                        <td><button
                           const onClick ={()=>{
                                {const url = `http://localhost:8080/vehicle/${item.vehicle.id}`
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
                        {/* <td><Link to='/updatevehicle'></Link>Update <Link/></td> */}
                    </tr>
                )
            })
        }
    </tbody>
  </table>
  </>
  )
}

export default GetVehicle
