// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { UserProvider } from './context/AuthContext';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Profile from './pages/Profile';
// import Services from './pages/Services';
// import About from './pages/About';
// import realEstateVideo from './assets/videos/real-estate.mp4'; 
// import './styles/App.css'; 
// import Apartments from './property/apartment/Apartments';
// import FeedbackForm from './pages/FeedBackForm';
// import ContactUs from './pages/ContactUs';
// import Luxury1 from './property/apartment/Luxury1';
// import AdminPage from './pages/AdminPage';
// import BasicModalExample from './pages/BasicModalExample'; 

// const App = () => {
//   return (
//     <UserProvider>
//       <div className="app">
//         <video src={realEstateVideo} autoPlay loop muted id="background-video"></video>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/apartments" element={<Apartments />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/feedback" element={<FeedbackForm />} />
//             <Route path="/contact" element={<ContactUs />} />
//             <Route path="/luxury1" element={<Luxury1 />} />
//             <Route path="/modal-test" element={<BasicModalExample />} /> 
//             <Route path="/admin" element={<AdminPage />} />
//           </Routes>
//         </Router>
//       </div>
//     </UserProvider>
//   );
// };

// export default App;
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { UserProvider, UserContext } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Services from './pages/Services';
import About from './pages/About';
import realEstateVideo from './assets/videos/real-estate.mp4';
import './styles/App.css';
import Apartments from './property/apartment/Apartments';
import FeedbackForm from './pages/FeedBackForm';
import ContactUs from './pages/ContactUs';
import Luxury1 from './property/apartment/Luxury1';
import AdminPage from './pages/AdminPage';
import BasicModalExample from './pages/BasicModalExample';
import Apartment from './property/apartment/Apartment';
import House from './property/house/House';
import Apartment11 from './property/apartment/Apartment11';
import Condo from './property/condo/Condo';
import Cottage from './property/cottage/Cottage';
import Duplex from './property/duplex/Duplex';
import Rowhouse from './property/rowhouse/Rowhouse';
import Triplex from './property/triplex/Triplex';
import Ranch from './property/ranch/Ranch';
import Mansion from './property/mansion/Mansion';
import Penthouse from './property/penthouse/Penthouse';
import Townhouse from './property/townhouse/Townhouse';

const ProtectedRoute = ({ children, roleRequired }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roleRequired && user.roles !== roleRequired) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

const AppRoutes = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [initialNavigationDone, setInitialNavigationDone] = useState(false);

  useEffect(() => {
    if (user && !initialNavigationDone) {
      if (user.roles === 'admin') {
        navigate('/admin');
      } else {
        navigate('/profile');
      }
      setInitialNavigationDone(true); // Ensure this logic only runs once after login
    }
  }, [user, navigate, initialNavigationDone]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/feedback"
        element={
          <ProtectedRoute>
            <FeedbackForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/apartments"
        element={
          <ProtectedRoute>
            <Apartments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/apartmentss"
        element={
          <ProtectedRoute>
            <Apartment />
          </ProtectedRoute>
        }
      />
      <Route path="/luxury1/:id" element={<Luxury1 />} />
      <Route path="apartment" element={<Apartment11 />} />
      <Route path="/house" element={<House />} />
      <Route path="/condo" element={<Condo />} />
      <Route path="/cottage" element={<Cottage />} />
      <Route path="/duplex" element={<Duplex />} />
      <Route path="/ranch" element={<Ranch />} />
      <Route path="/triplex" element={<Triplex />} />
      <Route path="/rowhouse" element={<Rowhouse />} />
      <Route path="/townhouse" element={<Townhouse />} />
      <Route path="/penthouse" element={<Penthouse />} />
      <Route path="/mansion" element={<Mansion />} />
      <Route
        path="/modal-test"
        element={
          <ProtectedRoute>
            <BasicModalExample />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute roleRequired="admin">
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <video src={realEstateVideo} autoPlay loop muted id="background-video"></video>
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </UserProvider>
  );
};

export default App;

