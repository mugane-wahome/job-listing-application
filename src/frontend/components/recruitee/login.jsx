import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const loginAction = async ({request, params}) => {
    const loginForm = await request.formData();
    const loginData = Object.fromEntries(loginForm);
    console.log(loginData)
    return redirect('/jobsearch');
}

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
 
  return (
    <div>
      <h2>PATAJOB</h2>
      <h3>Login</h3>
      <p>
        Nice to see you come back!
      </p>
      <Form method='post'>
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </Form>
      <p>
        Don't have an account?<Link to="/signup">Sign up</Link>
      </p>
      <p>
          <button type="submit">recruiter</button>
        </p>
        <p>
          <button type="submit">recruitee </button>
        </p>

    </div>
  );
};

export default LoginForm;