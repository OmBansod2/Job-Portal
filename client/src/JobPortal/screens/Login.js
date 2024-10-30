import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  const login = () => {
    const user = { email, password };
    dispatch(loginUser(user)).then((response) => {
      if (response && response.error) {
        // If there is an error in the response, show the error message
        setShowError(true);
      }
    });
  };

  return (
    <div className=''>
  <div className='row justify-content-center mt-5'>
    <div className='col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded'>
      <div className='card p-5'>
        <h2 style={{ textAlign: 'center', color: '#833178' }}>Login</h2>
        <div>
          <input
            required
            type='text'
            placeholder='Email'
            className='form-control job_form'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <input
            required
            type='password'
            placeholder='Password'
            className='form-control job_form'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '10px' }}
          />

          <button
            onClick={login}
            className='btn btn-primary mt-3'
            style={{ width: '100%', height: '50px', backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold' }}
          >
            Login
          </button>
          <br />
          {showError && (
            <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
              Wrong email or password. Please try again.
            </p>
          )}
          <p style={{ textAlign: 'center', fontSize: '20px', marginTop: '20px' }}>
            <Link to='/register' style={{ textDecoration: 'none', color: '#007bff' }}>
              Go to register page
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
