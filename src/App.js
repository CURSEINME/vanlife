import Home from './Pages/Home';
import Layout from './Components/Layout';
import Vans, { loader as vansLoader} from './Pages/Vans';
import About from './Pages/About';
import VanDetails, { loader as vanDetailLoader } from "./Pages/VanDetails";
import DashBoard from "./Pages/Host/Dashboard";
import Reviews from "./Pages/Host/Reviews";
import Income from "./Pages/Host/Income";
import HostVansDetail, { loader as hostVansDetailLoader} from './Pages/Host/HostVans/HostVansDetail';
import HostLayout from './Components/HostLayout';
import HostVans, { loader as hostVansLoader } from './Pages/Host/HostVans';
import HostVansPricing from './Pages/Host/HostVans/HostVansPricing';
import HostVansPhotos from './Pages/Host/HostVans/HostVansPhotos';
import HostVansInfo from './Pages/Host/HostVans/HostVansInfo';
import NotFound from './Pages/NotFound';
import Error from './Components/Error';
import Login, { action as loginAction } from './Pages/Login';
import SignUp, { action as signUpAction } from "./Pages/SignUp";
import { requireAuth } from './utils';
import Profile, { loader as profileLoader} from './Pages/Profile';

import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


import './App.css';

const router = createHashRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>} >
    <Route index element={<Home/>} />
    <Route 
      path="profile" 
      element={<Profile/>} 
      loader={profileLoader}
    />
    <Route path="about" element={<About/>} />
    <Route
      path="vans"
      loader={vansLoader}
      element={<Vans/>}
      errorElement={<Error/>}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetails/>} 
      loader={vanDetailLoader}
      errorElement={<Error/>}
    />
    
      <Route path="host" element={<HostLayout/>} >

        <Route 
          index 
          element={<DashBoard/>}
          loader={async ({request}) => await requireAuth(request)} 
        />
        <Route
          path="reviews" 
          element={<Reviews/>}
          loader={async ({request}) => await requireAuth(request)} 
        />
        <Route 
          path="income" 
          element={<Income/>}
          loader={async ({request}) => await requireAuth(request)}  
        />
        <Route 
          path="vans" 
          element={<HostVans/>}
          loader={hostVansLoader} 
          errorElement={<Error/>}
        /> 

        <Route 
          path="vans/:id" 
          element={<HostVansDetail/>}
          loader={hostVansDetailLoader}
          errorElement={<Error/>} 
        >
          <Route 
            index element={<HostVansInfo/>}
            loader={async ({request}) => await requireAuth(request)}  
          />
          <Route 
            path="pricing" 
            element={<HostVansPricing/>}
            loader={async ({request}) => await requireAuth(request)}  
          />
          <Route 
            path="photos" 
            element={<HostVansPhotos/>}
            loader={async ({request}) => await requireAuth(request)}  
          />
        </Route>
        
    </Route>

    <Route path="*" element={<NotFound/>} />
    <Route path="login" action={loginAction} element={<Login/>} />
    <Route path="signUp" action={signUpAction} element={<SignUp/>} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
