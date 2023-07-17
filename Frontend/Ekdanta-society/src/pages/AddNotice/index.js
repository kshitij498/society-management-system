
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
const AddNotice = () =>{
    const [noticemsg, setNoticeMsg] = useState('')
    const [noticeDate, setNoticeDate] = useState('') 
    const [ownerId, setOwnerId] = useState('') 

    const addnoticeBoard = () =>{
        if(noticemsg.length==0){
            toast.warning('Please write Notice Message')
        }else if(noticeDate.length==0){
            toast.warning('Please enter Notice Date')
        }else if(ownerId.length==0){
            toast.warning('Please enter your Owner Id')
        }else{
            const body = {
                noticemsg,
                noticeDate,
                ownerId
            }
            const url = 'http://localhost:8080/noticeBoard/addnoticeBoard'
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
        <h1>Add Notice Here</h1>

            
                <div className="row">
               
               <div className="col"></div>
               <div className="col">
               <div className="row">

                <div className="col">

               <div className="mb-3">
                <label htmlFor="" className="label-control">Owner Id</label>
                <input onChange={(e)=>{
                    setOwnerId(e.target.value)
                }}
                type="number" className="form-control"></input>
                </div>
                </div>

                <div className="col">

                <div className="mb-3">
                <label htmlFor="" className="label-control">Notice Date</label>
                <input onChange={(e)=>{
                    setNoticeDate(e.target.value)
                }} 
                type="date" className="form-control"></input>
                </div>
                </div>
                </div>

                <div className="mb-3">
                <label htmlFor="" className="label-control">Write Notice Message Here</label>
                <textarea onChange={(e)=>{
                    setNoticeMsg(e.target.value)
                }}
                type="text" rows={10} className="form-control"></textarea>
                </div>

                <div className="mb-3">
                <button onClick={addnoticeBoard} className="btn btn-primary">Add Notice</button>
                </div>
                </div>
               <div className="col"></div>
                
            </div>
      
    </div>

    );
}

export default AddNotice