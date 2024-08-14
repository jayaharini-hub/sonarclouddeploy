// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Login.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import axios from 'axios';
// import { UserContext } from '../context/AuthContext';

// const Login = () => {
//   const [username, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useContext(UserContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (username === '' || password === '') {
//       setError('Please fill in both fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/userInfo/authenticate', {
//         username: username,
//         password: password
//       });

//       const user = response.data;
//       console.log(user);
//       if (user) {
//         localStorage.setItem('user', JSON.stringify(user));
//         login(user);
//         if (user.roles === 'admin') {
//           navigate('/admin');
//         } else if (user.roles === 'user') {
//           navigate('/');
//         } else {
//           setError('Invalid role.');
//         }
//       } else {
//         setError('Invalid username or password.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="login-container">
//         <div className="login-form">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="login-button">Login</button>
//           </form>
//           <p className="signup-link">
//             Don't have an account? <a href="/signup">Sign up</a>
//           </p>
//           {error && <p className="error">{error}</p>}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Login;
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { UserContext } from '../context/AuthContext';

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/userInfo/authenticate', {
        username: username,
        password: password,
      });

      const user = response.data;
      console.log(user);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        login(user);
        if (user.roles === 'admin') {
          navigate('/admin');
        } else if (user.roles === 'user') {
          navigate('/');
        } else {
          setError('Invalid role.');
        }
      } else {
        setError('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
