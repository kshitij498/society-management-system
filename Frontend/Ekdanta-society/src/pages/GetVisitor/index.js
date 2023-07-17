import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const GetVisitor = (props) => {
  const [visitor, setVisitor] = useState([])

  useEffect(() => {
    const url = "http://localhost:8080/visitor/visitorlist"
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setVisitor(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }, [])

//   const deleteVisitor=(id)=>{
//     const url = `http://localhost:8080/visitor/${id}`
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
      <h1><center><u>Visitors List</u></center></h1>
      <br></br><br></br>
      <Link to='/home'>Back</Link>
      <Link to='/addvisitor'  className="float-end">Add Visitor</Link>
    <table class="table" id="customers">
    <thead class="thead-light">
    <br></br>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Owner FirstName</th>
        <th scope="col">Owner LastName</th>
        <th scope="col">Contact No</th>
        <th scope="col">Flat No</th>
        <th scope="col">Wing</th>
        <th scope="col">In Time</th>
        {/* <th scope="col">Action</th> */}
      </tr>
    </thead>
    <tbody>
        {
            visitor.map((item,i)=>{
                return(
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{item.name}</td>
                        <td>{item.ownerFirstName}</td>
                        <td>{item.ownerLastName}</td>
                        <td>{item.contactNo}</td>
                        <td>{item.flatNo}</td>
                        <td>{item.wing}</td>
                        <td>{item.inTime}</td>
                        {/* <td><button
                           const onClick ={()=>{
                                {const url = `http://localhost:8080/visitor/${item.id}`
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
                        type="button" className="btn btn-danger">Delete</button></td> */}
                    </tr>
                )
            })
        }
    </tbody>
  </table>
  </>
  )
}

export default GetVisitor
