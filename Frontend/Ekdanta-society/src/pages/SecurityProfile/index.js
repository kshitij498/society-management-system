import { Link } from "react-router-dom"

const SecurityProfile=()=>{
return(
    <><br></br>
    <h1>
    
      <center><u>Security Profile</u></center></h1>
      <br></br>
    <Link to='/home'>Back</Link>
    <div className="row">
        
   
        <div className="col"></div>
        <div className="row">
        
        {/* <Link to='/updateowner'>Update Profile</Link>
        &emsp;&emsp;
        <Link to='/updatepassword'>Change Password</Link> */}
          <div className="form">
            <div className="mb-3">
            <label htmlFor="" className="label-control">
            <br></br>
                First Name
              </label>
              <h3>{sessionStorage.getItem('firstName')}</h3>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <h3>{sessionStorage.getItem('lastName')}</h3>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <h3>{sessionStorage.getItem('password')}</h3>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Contact Number
              </label>
              <h3>{sessionStorage.getItem('mobileNo')}</h3>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email
              </label>
              <h3>{sessionStorage.getItem('email')}</h3>
            </div>
            

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Role
              </label>
              <h3>{sessionStorage.getItem('role')}</h3>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      </>
)
}
export default SecurityProfile