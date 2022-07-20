import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import AuthApp from './AuthApp';
import UnauthApp from './UnauthApp';

function App() {
  const { user } = useContext(UserContext);

  return user.auth ? <AuthApp /> : <UnauthApp />;
}

export default App;
