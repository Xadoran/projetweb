import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = ({ onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState("male"); // You might use radio buttons or select dropdown for sex
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', {
        email,
        name,
        surname,
        phoneNumber,
        age,
        sex,
        password,
      });
      console.log(response.data);
      // Optionally, you can redirect to the login page after successful signup
      // onLoginClick();
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        /> */}

        <input type="radio" name="gender" value="male" checked={sex === 'male'} onChange={() => setSex("male") } /> Male
        <input type="radio" name="gender" value="female" checked={sex === 'female'} onChange={() => setSex("female")} /> Female
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <button onClick={onLoginClick}>Login</button></p>
    </div>
  );
};

export default SignupPage;
