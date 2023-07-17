
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
const Addtenant = () =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNo, setContactNo] = useState('') 
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [flat,setFlat]=useState([]);
    const [flatId,setFlatId]=useState(-1);
    const [wing,setWing]=useState('');
    const [wingList,setWingList]=useState([]);
    
    useEffect(()=>{
        const url=`http://localhost:8080/society/getFlat/${sessionStorage.getItem("id")}`
    
        axios.get(url).then((response) => {
            const result = response.data
            const array = result['data'].map((f)=>f.wing);
            const arr = array.filter((item,i,ar)=>ar.indexOf(item)==i);
            setWingList([...arr])
            setFlat(result['data']);
        })
    },[]);
   

    const addtenant = () =>{
        if(firstName.length==0){
            toast.warning('Please enter your First Name')
        }else if(lastName.length==0){
            toast.warning('Please enter your Last Name')
        }else  if(email.length==0){
            toast.warning('Please enter your Email')
        }else if(contactNo.length==0){
            toast.warning('Please enter your Contact No.')
        // }else if(gender.length==0){
        //   toast.warning('Please enter gender of tenant')
        }else{
            const body = {
                flatId:flat.filter((f)=>f.wing===wing).filter((ft)=>ft.flatNo==flatId)[0].id,
                contactNo,
                email,
                firstName,
                lastName,
                //gender
            }
            const url = 'http://localhost:8080/tenant/addtenant'
           axios.post(url, body).then(response =>{
               const result = response.data

               if(result['status']== 'success'){
                   toast.success('Successfully added!')
               }else{
                   toast.error(result['Error'])
               }
           })
        }
    } 
    return(
    <div>
       <br></br>
      <h1><center><u>Add Tenant Details</u></center></h1>
      <br></br><br></br>

        <Link to='/tenants'>Back</Link>
        <div className="row">
        <div className="col"></div>
        <div className="col">
       
          <div className="form">
          <div className="mb-3">
              <label htmlFor="" className="label-control">
              <h4>Wing</h4>
              </label>&emsp;&emsp;
              <select onChange={(e) => {
                    setWing(e.target.value)

                }}>
                     <option>...</option>
                 {
                  wingList.map((f)=>{
                      return(
                        <option>{f}</option>
                      )
                  })
              }
             </select>
            </div>
          <div className="mb-3">
              <label htmlFor="" className="label-control">
              <h4>Flat</h4>
              </label>&emsp;&emsp;
              <select onChange={(e) => {
                  setFlatId(e.target.value)
                }}>
                     <option>...</option>
                 {
                  flat.filter((f)=>f.wing==wing).map((f)=>{
                      return(
                        <option value={f.flatId}>{f.flatNo}</option>
                      )
                  })
              }
             </select>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
              <h4>First Name</h4>
              </label>
              <input
            onChange={(e) => {
                setFirstName(e.target.value)
            }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              <h4>Last Name</h4>
              </label>
              <input
                 onChange={(e) => {
                    setLastName(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              <h4>Contact Number</h4>
              </label>
              <input
                 onChange={(e) => {
                    setContactNo(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            
            <div className="mb-3">
              <label htmlFor="" className="label-control">
              <h4>Email</h4>
              </label>
              <input
                 onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="" className="label-control">
                Gender
              </label>
              <input
                 onChange={(e) => {
                    setGender(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div> */}
         

            <div className="mb-3">
             <center>
              <button  onClick={addtenant} className="btn btn-primary">
                <h4>Add </h4>
              </button></center>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
    );
}

export default Addtenant