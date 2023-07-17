
import { useNavigate } from 'react-router'
import SearchBar from '../../components/SearchBar'
import { useEffect, useState } from 'react'
import Owner from '../../components/Owner'
import { Link } from 'react-router-dom'
// import image from '../images/best.jpg'
import TopSlider from '../TopSlider/TopSlider'





const Home = () => {
  // get the logged in user's information
  const { id, firstName, lastName } = sessionStorage
  const navigate = useNavigate()
  const [owners, setOwners] = useState([])
  const [role,setRole]=useState('');

  useEffect(()=>{
    setRole(sessionStorage.getItem('role'));
  },[])

  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('mobileNo')
    sessionStorage.removeItem('dob')
    sessionStorage.removeItem('gender')
    sessionStorage.removeItem('address')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('loginStatus')
    

    // navigate to sign in component
    navigate('/signin')
  }

  return (
    
    <div>
       <br></br>
      <div className="row">
        <div className="col">
          <h1>
            <i>Ekdanta Society</i></h1>
        </div>

        <div className="col">
          <div className="float-end">
            <div className="btn-group " role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-warning dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                 
                <b>Welcome {firstName}</b>
              </button>
              { role === 'secretary' &&
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                
                    <li>
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/vehicle">Own Vehicle</Link>
                    </li>
                    <hr></hr>
                    <li>
                    <Link className="dropdown-item" to="/allflat">Flats</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/users">Owners</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/workstaffs">Workstaffs</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/viewmaintenance">Maintenance</Link>
                    </li>

                    <li>
                    <Link className="dropdown-item" to="/viewcomplaints">Complaints</Link>
                    </li>
                    <li>
                    <button onClick={logoutUser} className="dropdown-item">
                        Logout
                    </button>
                    </li>
                </ul>
                }
                { role === 'owner' &&
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                
                    <li>
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/ownersflat">My Flats</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/tenants">Tenants</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/addcomplaints"> Complaints</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/vehicle">Vehicle</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/maintenance">Maintanance</Link>
                    </li>
                    <li>
                    <button onClick={logoutUser} className="dropdown-item">
                        Logout
                    </button>
                    </li>
                </ul>
                }
                { role === 'security' &&
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                
                    <li>
                    <Link className="dropdown-item" to="/securityprofile">Profile</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/visitor">Visitor</Link>
                    </li>
                    <li>
                    <button onClick={logoutUser} className="dropdown-item">
                        Logout
                    </button>
                    </li>
                </ul>
                }
            </div>
          </div>
        </div>
        {/* <div height={100}></div> */}
       {/* <img src={image} height={800}></img> */}
       
      </div>
      <TopSlider/>


      
    </div>
  )
}


 export default Home