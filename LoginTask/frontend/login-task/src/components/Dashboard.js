import React from "react";

export default function Dashboard({ username, LogOut }) {

  return (
    <div style={styles.container}>
        <div style={styles.box}>
            <h1 style={styles.text}>Welcome, {username}!</h1>
            <h2 style={styles.subtext}>You have successfully logged in.</h2>
            <button onClick={LogOut} style={styles.logoutButton}>Logout</button>
        </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  box: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  text: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  subtext: {
    fontSize: '20px',
    color: '#555',
  },
logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
};