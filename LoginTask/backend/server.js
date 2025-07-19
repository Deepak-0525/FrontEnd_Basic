// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const defaultUser = {
  email: 'deepaksaravanan45@gmail.com',
  password: '123456',
  username: 'Deepak',
};

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log(`Login attempt with email: ${email}, password: ${password}`);

  if (email === defaultUser.email && password === defaultUser.password) {
    res.status(200).json({ message: 'Login successful', username: defaultUser.username });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
