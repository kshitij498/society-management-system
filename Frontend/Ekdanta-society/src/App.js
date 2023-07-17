import Signin from './pages/Signin'
import Addowner from './pages/Addowner'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Home from './pages/Home'
  import Addmaintenance from './pages/AddMaintenance';
  import Addcomplaint from './pages/Addcomplaint'
  import Addnotice from './pages/AddNotice'
  import Addvehicle from './pages/Addvehicle'
  import AddWorkStaff from "./pages/AddWorkstaff";
  import Updatecomplaintstatus from './pages/Updatecomplaintstatus'
import GetAllOwner from './pages/GetAllOwner';
import Profile from './pages/Profile';
 import WorkstaffSignin from './pages/WorstaffSignin'
import AddVisitor from './pages/Addvisitor';
import GetWorkStaff from './pages/GetWorkStaff'
import ComplaintList from './pages/ComplaintList';
import MaintenanceList from './pages/MaintenanceList';
import GetTenant from './pages/GetTenant'
import Addtenant from './pages/Addtenant'
import GetVehicle from './pages/GetVehicle'
import GetVisitor from './pages/GetVisitor'
import Maintenance from './pages/Maintenance';
import SecurityProfile from './pages/SecurityProfile';
import GetFlatsToSecretary from './pages/GetFlatsToSecretary';
import AddFlat from './pages/AddFlat';
import GetFlats from './pages/GetFlats';
import './App.css';

  const AuthorizeUser = () => {
    const loginStatus = sessionStorage['loginStatus']
    return loginStatus === '1' ? <Home /> : <Signin />
    // if (loginStatus == '1') {
    //   return <Home />
    // } else {
    //   return <Signin />
    // }
  }

function App() {

     

  return (
    <div className="container">

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthorizeUser />} /> 
            <Route path='/signin' element={<Signin/>}/> 
            <Route path='/addowner' element={<Addowner/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/addmaintenance' element={<Addmaintenance/>}/>
            <Route path='/addcomplaints' element={<Addcomplaint/>}/>
            <Route path='/addnotice' element={<Addnotice/>}/>
            <Route path='/addvehicle' element={<Addvehicle/>}/>
            <Route path='/addworkstaff' element={<AddWorkStaff/>}/>
            <Route path='/updatestatus' element={<Updatecomplaintstatus/>}/>
            <Route path='/addcomplaint' element={<Addcomplaint/>}/>
            <Route path='/users' element={<GetAllOwner/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/workstaffsignin' element={<WorkstaffSignin/>}/>
            <Route path='/addvisitor' element={<AddVisitor/>}/>
            <Route path='/workstaffs' element={<GetWorkStaff/>}/>
            <Route path='/viewcomplaints' element={<ComplaintList/>}/>
            <Route path='/viewmaintenance' element={<MaintenanceList/>}/>
            <Route path='/tenants' element={<GetTenant/>}/>
            <Route path='/addtenants' element={<Addtenant/>}/>
            <Route path='/vehicle' element={<GetVehicle/>}/>
            <Route path='/visitor' element={<GetVisitor/>}/>
            <Route path='/maintenance' element={<Maintenance/>}/>
            <Route path='/securityprofile' element={<SecurityProfile/>}/>
            <Route path='/addflat'  element={<AddFlat></AddFlat>}/>
            <Route path='/ownersflat' element={<GetFlats></GetFlats>}/>
            <Route path='/allflat' element={<GetFlatsToSecretary></GetFlatsToSecretary>}/>
        </Routes>
        </BrowserRouter>
        <ToastContainer
                position="top-right"
                theme='Dark'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
        />
    </div>
  );
}

export default App;
