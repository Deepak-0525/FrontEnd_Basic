
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import axios from 'axios';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email, password
      }); 
      const data = await response.data;
      if (response.status === 200) {
        setUsername(data.username);  
        setLoggedIn(true);         
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message); // "Invalid email or password"
    } else {
      alert('Server error'); // Server down, network issue, etc.
    }
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setEmail(''); 
    setPassword('');
  };

  return (
    <>
      {!loggedIn ? (
        <div style={styles.container}>
          <h2>Login</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      ) : (
        <Dashboard username={username} LogOut={handleLogout} />
      )}
    </>
  );
}

const styles = {
  container: {
    maxWidth: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer'
  }
};
