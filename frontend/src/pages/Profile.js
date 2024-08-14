import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/AuthContext';
import '../styles/Profile.css';
import { FaUserCircle, FaEnvelope, FaHome ,FaShieldAlt,FaUser} from 'react-icons/fa';

const Profile = () => {
  const { user, login, logout } = React.useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        const fetchedUser = response.data.find((u) => u.email === user.email);

        if (fetchedUser) {
          login(fetchedUser);

          // Log the fetched user data for debugging
          console.log('Fetched user:', fetchedUser);

          if (fetchedUser.roles === 'admin') {
            // Redirect to the admin page if the role is 'admin'
            navigate('/admin');
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [login, user.email, navigate]);

  const handleLogout = () => {
    logout(); // Clear user state
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <h2>{user.username}'s Profile</h2>
        <button onClick={() => navigate('/')} className="back-button">
          <FaHome className="icon" /> Back to Home
        </button>
      </div>
      <div className="profile-details">
        <div className="profile-detail">
          <FaEnvelope className="detail-icon" />
          <span className="detail-label">Email:</span>
          <span className="detail-value">{user.email}</span>
        </div>
        <div className="profile-detail">
          <FaUserCircle className="detail-icon" />
          <span className="detail-label">Name:</span>
          <span className="detail-value">{user.username}</span>
        </div>
        {user.roles && (
          <div className="profile-detail">
            {user.roles === 'admin' ? (
              <FaShieldAlt className="detail-icon" />
            ) : (
              <FaUser className="detail-icon" />
            )}
            <span className="detail-label">Role:</span>
            <span className="detail-value">{user.roles}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
