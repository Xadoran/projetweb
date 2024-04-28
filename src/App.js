import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleTogglePage = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {showLogin ? (
        <LoginPage onSignupClick={handleTogglePage} />
      ) : (
        <SignupPage onLoginClick={handleTogglePage} />
      )}
    </div>
  );
};

export default App;
