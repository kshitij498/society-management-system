import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const GetAllOwner = (props) => {
  const [owner, setOwner] = useState([])

  useEffect(() => {
    const url = "http://localhost:8080/owner/ownerlist"
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setOwner(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }, [])

  const deleteOwner=(id)=>{
    const url = `http://localhost:8080/owner/delete/${id}`
    axios.delete(url,{ headers: {
        'Content-Type': 'text/plain;charset=utf-8',
    }}).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        toast.success("user successfully deleted")
      } else {
        toast.error(result['error'])
      }
    })  
  }

    

  return (
      <>
      <br></br>
      <h1><center><u>Owners</u></center></h1>
      <br></br><br></br>
      <Link to='/home'>Back</Link>
      <Link to='/addowner'  className="float-end">Add Owner</Link>
      {/* <br/>
      <br/> */}
    <table class="table" id="customers">
    <thead class="thead-light">
    <br></br>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Contact No</th>
        {/* <th scope="col"></th> */}
      </tr>
    </thead>
    <tbody>
        {
            owner.map((item,i)=>{ console.log(item)
                return(
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.mobileNo}</td>
                        {/* <td> <button const onClick={()=>{
                                {const url = `http://localhost:8080/owner/delete/${item.id}`
                                axios.delete(url)
                              
                                .then((response) => {
                                  const result = response.data
                                  if (result['status'] == 'success') {
                                    toast.success("user successfully deleted")
                                    window.location.reload()
                                  } 
                                })  
                              }}}
                        type="button" class="btn btn-danger" > Delete</button></td> */}
                    </tr>
                )
            })
        }
    </tbody>
  </table>
  </>
  )
}

export default GetAllOwner
