import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import SignUpForm from './frontend/components/recruitee/signup';
import LoginForm from './frontend/components/recruitee/login';


function App() {

  const [count, setCount] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      
      <LoginForm/>
      
    </div>
  );
}

export default App;