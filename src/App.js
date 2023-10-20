import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn"; 
import SignUp from "./pages/SignUp";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import EditListing from "./pages/EditListing";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element= {<Explore/>}/>
        <Route path='/offers' element= {<Offers/>}/>
        <Route path='/category/:categoryName' element= {<Category/>}/>
        <Route path='/profile' element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
          <Route path='/create-listing' element={<CreateListing/>}/>
        <Route path='/sign-in' element= {<SignIn/>}/>
        <Route path='/sign-up' element= {<SignUp/>}/>
        <Route path='/forgot-password' element= {<ForgotPassword/>}/>
        <Route path='/category/:categoryName/:listingId' element={<Listing/>}/>
        <Route path='/contact/:landlordId' element={<Contact />} />
        <Route path='/edit-listing/:listingId' element={<EditListing/>}/>
      </Routes>
      <NavBar/>
    </Router>
    <ToastContainer/>
  </>
  );
}

export default App;
