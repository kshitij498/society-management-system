
import {Link} from 'react-router-dom'
import { useState ,useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
const AddVisitor = () =>{
    const [name, setName] = useState('')
    const [contactNo, setContactNo] = useState('') 
    const [flat,setFlat]=useState([]);
    const [flatId,setFlatId]=useState(-1);
    const [wing,setWing]=useState('');
    const [wingList,setWingList]=useState([]);
	


    useEffect(()=>{
        const url="http://localhost:8080/society/flatlist"
    
        axios.get(url).then((response) => {
            const result = response.data
            const array = result['data'].map((f)=>f.wing);
            const arr = array.filter((item,i,ar)=>ar.indexOf(item)==i);
            setWingList([...arr])
            setFlat(result['data']);
        })
    },[]);


    const addvisitor = () =>{
        if(name.length==0){
            toast.warning('Please enter Name')
        }else if(contactNo.length==0){
            toast.warning('Please enter Contact No.')
        }else{
            const body = {
                name,
                contactNo,
            
	            flatId:flat.filter((f)=>f.wing===wing).filter((ft)=>ft.flatNo==flatId)[0].id,
	           
	
            }
            const url = 'http://localhost:8080/visitor/addvisitor'
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
        <h1><center><u>Add Visitor</u></center></h1>
        <br></br><br></br>

        <Link to='/visitor'>Back</Link>
        <div className="row">
        <div className="col"></div>
        <div className="col">
        
          <div className="form">
          <div className="mb-3">
              <label htmlFor="" className="label-control">
              <br></br>
                <h2>Wing</h2>
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
              <h2>Flat</h2>
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
              <h2>Name</h2>
              </label>
              <input
            onChange={(e) => {
                setName(e.target.value)
            }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              <h2>Contact Number</h2>
              </label>
              <input
                 onChange={(e) => {
                    setContactNo(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
                <br></br>
            <div className="mb-3">
             <center>
              <button  onClick={addvisitor} className="btn btn-primary">
                <h4>Add </h4>
              </button>
              </center>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
    )
}

export default AddVisitor


