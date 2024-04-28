// server.js
// Import the User model at the top
const User = require('./models/User');

app.post('/api/signup', (req, res) => {
  const { email, name, surname, phoneNumber, age, sex, password } = req.body;

  const newUser = new User({
    email,
    name,
    surname,
    phoneNumber,
    age,
    sex,
    password,
  });

  newUser.save()
    .then(() => {
      res.status(200).json({ success: true, message: 'User signed up successfully' });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: 'Error signing up user', error: error.message });
    });
});
