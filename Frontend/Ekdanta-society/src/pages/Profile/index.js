import { Link } from "react-router-dom"

const Profile=()=>{
return(
    <div className="col">
      <br></br>
        <Link to='/home'>Back</Link>
        <div className="col"></div>
        <div className="row">
        <h1 className='title'><u>OWNER PROFILE</u></h1>
        {/* <Link to='/updateowner'>Update Profile</Link> */}
        &emsp;&emsp;
        {/* <Link to='/updatepassword'>Change Password</Link> */}
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
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
                Email Address
              </label>
              <h3>{sessionStorage.getItem('email')}</h3>
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
                Date Of Birth
              </label>
              <h3>{sessionStorage.getItem('dob')}</h3>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Gender
              </label>
              <h3>{sessionStorage.getItem('gender')}</h3>
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
)
}
export default Profile