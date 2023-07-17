import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const GetFlatsToSecretary = () =>{
    const [flats, setFlats] = useState([])

  useEffect(() => {
    const url = `http://localhost:8080/society/flatlist`
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setFlats(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }, [])

  return (
      <>
       <br></br>
      <h1><center><u>Flat Details</u></center></h1>
      <br></br><br></br>
      <Link to='/home'>Back</Link>
      <Link to='/addflat'  className="float-end">Assign Flat</Link>
    <table class="table" id="customers">
    <thead class="thead-light">
    <br></br>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Owner Name</th>
        <th scope="col">Flat No</th>
        <th scope="col">Floor No</th>
        <th scope="col">Wing</th>
        <th scope="col">Flat Type</th>
        <th scope="col">Parking Slot</th>
        {/* <th scope="col"></th> */}
      </tr>
    </thead>
    <tbody>
        {
            flats.map((item,i)=>{
                return(
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{item.ownerFirstName?<strong>{item.ownerFirstName} {item.ownerLastName}</strong>:"NOT REGISTER"}</td>
                        <td>{item.flatNo}</td>
                        <td>{item.floorNo}</td>
                        <td>{item.wing}</td>
                        <td>{item.flatType}</td>
                        <td>{item.parkingSlot}</td>
                        {/* <td><button
                           const onClick ={()=>{
                                {const url = `http://localhost:8080/society/deleteowner/${item.id}`
                                axios.delete(url)
                                .then((response) => {
                                  const result = response.data
                                  if (result['status'] == 'success') {
                                    toast.success("user successfully deleted")
                                    window.location.reload()
                                  } 
                                })  
                              }}}
                        type="button" className="btn btn-danger">Delete</button></td> */}
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
export default GetFlatsToSecretary