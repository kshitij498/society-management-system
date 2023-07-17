
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const GetTenant = (props) => {
  const [tenant, setTenant] = useState([])

  useEffect(() => {
    const url = "http://localhost:8080/tenant/tenantlist"
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setTenant(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }, [])

  // const deleteTenant=(id)=>{
  //   const url = `http://localhost:8080/tenant/delete/${id}`
  //   axios.get(url,{ headers: {
  //       'Content-Type': 'text/plain;charset=utf-8',
  //   }}).then((response) => {
  //     const result = response.data
  //     if (result['status'] == 'success') {
  //       toast.success("user successfully deleted")
  //     } else {
  //       toast.error(result['error'])
  //     }
  //   })  
  // }

    

  return (
      <>
      <br></br>
      <h1><center><u>Tenant Details</u></center></h1>
      <br></br><br></br>
      <Link to='/home'>Back</Link>
      <Link to='/addtenants'  className="float-end">Add Tenant</Link>
    <table class="table" id="customers">
    <thead class="thead-light">
    <br></br>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Contact No</th>
        <th scope="col">Owner FirstName</th>
        <th scope="col">Owner LastName</th>
        <th scope="col">Flat No</th>
        <th scope="col">Wing</th>
        <th scope="col">Action</th>
        
      </tr>
    </thead>
    <tbody>
        {
            tenant.filter(m=>m.ownerfirstName===sessionStorage.getItem("firstName")).map((item,i)=>{
                return(
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.contactNo}</td>
                        <td>{item.ownerfirstName}</td>
                        <td>{item.ownerlastName}</td>
                        <td>{item.flatNo}</td>
                        <td>{item.wing}</td>
                        <td><button 
                             const onClick={()=>{
                                {const url = `http://localhost:8080/tenant/delete/${item.id}`
                                axios.delete(url)
                                //     { headers: {
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
                        type="button" class="btn btn-danger" >Delete</button></td>
                    </tr>
                )
            })
        }
    </tbody>
  </table>
  </>
  )
}

export default GetTenant
