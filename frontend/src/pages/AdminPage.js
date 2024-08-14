import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AdminPage.css';

const AdminPage = () => {
  const [userSignups, setUserSignups] = useState([]);
  const [userFeedbacks, setUserFeedbacks] = useState([]);
  const [userContacts, setUserContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://localhost:8080/userInfo');
        const feedbacksResponse = await axios.get('http://localhost:8080/feedback');
        const contactsResponse = await axios.get('http://localhost:8080/bookforhouse');

        console.log('Users:', usersResponse.data);  
        console.log('Feedbacks:', feedbacksResponse.data);  
        console.log('Contacts:', contactsResponse.data);  

        setUserSignups(usersResponse.data);
        setUserFeedbacks(feedbacksResponse.data);
        setUserContacts(contactsResponse.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/userInfo/${id}`);
      setUserSignups(userSignups.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  const handleDeletefeedback = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/feedback/${id}`);
      setUserFeedbacks(userFeedbacks.filter(feedback => feedback.userId !== id));
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };
  const handleDeleteBookForHouse = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/bookforhouse/${id}`);
      setUserContacts(userContacts.filter(contact => contact.userId !== id));
    } catch (error) {
      console.error('Error deleting book for house:', error);
    }
  };
  

  return (
    <div>
      <Header />
      <div className="admin-container">
        <h2 className="admin-heading">Admin Dashboard</h2>
        <div className="admin-sections">
          <section className="admin-section">
            <h3 className="section-title">User Signups</h3>
            {userSignups.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {userSignups.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.email}</td>
                      <td>{user.name}</td>
                      <td>{user.roles}</td>
                      <td>
                      <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-data">No data available</p>
            )}
          </section>
          <section className="admin-section">
            <h3 className="section-title">User Feedbacks</h3>
            {userFeedbacks.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    
                    <th>ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Feedback</th>
                    <th></th>
                    <th></th>
                    
                  </tr>
                </thead>
                <tbody>
                  {userFeedbacks.map(feedback => (
                    <tr key={feedback.userId}>
                      <td>{feedback.userId}</td>
                      <td>{feedback.email}</td>
                      <td>{feedback.name}</td>
                      <td>{feedback.feedback}</td>
                      <td>{feedback.feedbackType}</td>
                      <td>
                      <button onClick={() => handleDeletefeedback(feedback.userId)}>Delete</button>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-data">No data available</p>
            )}
          </section>
          <section className="admin-section">
            <h3 className="section-title">User Contacts</h3>
            {userContacts.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    
                    <th>Email</th>
                    <th>Name</th>
                    <th>Mobile No</th>
                    <th>Feedback</th>
                    <th></th>
                    <th></th>
                 
                  </tr>
                </thead>
                <tbody>
                  {userContacts.map(contact => (
                    <tr key={contact.userId}>
                     
                      <td>{contact.email}</td>
                      <td>{contact.firstname} {contact.lastname}</td>
                      <td>{contact.phone}</td>
                      <td>{contact.feedback}</td>
                      <td>
                      <button onClick={() => handleDeleteBookForHouse(contact.userId)}>Delete</button>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-data">No data available</p>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
