import {useState,useEffect} from 'react'
import { Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'

const AddFlat = () =>{
    let navigate = useNavigate();
    const [flat,setFlat]=useState([]);
    const [owners,setOwners]=useState([]);
    const [owner,setOwner]=useState([]);
    const [flatNo,setFlatNo]=useState(-1);
    const [wing,setWing]=useState('');
    const [wingList,setWingList]=useState([]);

  useEffect(()=>{
    const url=`http://localhost:8080/society/flatlist`

    axios.get(url).then((response) => {
        const result = response.data
        const array = result['data'].filter(i=>i.ownerFirstName===null).map((f)=>f.wing);
        const arr = array.filter((item,i,ar)=>ar.indexOf(item)==i);
        setWingList([...arr])
        setFlat(result['data']);
    })

    const urlOwner=`http://localhost:8080/owner/ownerlist`

    axios.get(urlOwner).then((response) => {
        const result = response.data
        setOwners(result['data']);
    })

},[]);

  const addOwner = () => {
      if(wing.length===0){
        toast.warning('Please select Wing')
      }else if (flatNo ===-1){
        toast.warning('please select flat')
      }else if (owner === undefined){
        toast.warning('please select Owner')
      }
    else{
        const body = {
            id:owner,
            wing,
            flatNo
        }
        console.log(body)
        
            const url="http://localhost:8080/society/addflat"

        axios.post(url, body).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] === 'success') {
            toast.success('Successfully Add Owner')
            navigate("/allflat");
            } else {
            toast.error(result['error'])
            }
        })
            
        }
      
  }
    
    return(
        <div>
        <div className="row">
            <div className="col">
            <br></br>
                <h1 className='title'><u>Assign Flat To Owner</u></h1>
                <div className="form">
                <br></br>
                <Link to='/allflat'>Back</Link>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">
                        <br></br>
                           <h2>Owner</h2> 
                        </label>&emsp;&emsp;
                        <select class="form-select form-select-lg mb-3" aria-label="Default select example" onChange={(e)=>{
                            setOwner(e.target.value);
                        }}>
                            <option selected>...</option>
                            {
                                owners.map(o=>{
                                    return <option value={o.id}>{o.firstName} {o.lastName}</option>
                                })
                            }
                                
                        </select>
                    </div>
                   
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">
                           <h2>Wing</h2> 
                        </label>&emsp;&emsp;
                        <select class="form-select form-select-lg mb-3" aria-label="Default select example" onChange={(e)=>{
                            setWing(e.target.value);
                        }}>
                            <option selected>...</option>
                            {
                                wingList.map(o=>{
                                    return <option value={o}>{o}</option>
                                })
                            }
                                
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">
                           <h2>Flat</h2> 
                        </label>&emsp;&emsp;
                        <select class="form-select form-select-lg mb-3" aria-label="Default select example"onChange={(e)=>{
                            setFlatNo(e.target.value);
                        }}>
                            <option selected>...</option>
                            {
                                flat.filter(i=>i.ownerFirstName===null).filter(w=>w.wing===wing).map(o=>{
                                    return <option value={o.flatNo}>{o.flatNo}</option>
                                })
                            }
                                
                        </select>
                    </div>

                    <div className="mb-3">
                        <br></br>
                        <button  onClick={addOwner} className="btn btn-primary">
                            <h4>Assign Owner</h4>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AddFlat