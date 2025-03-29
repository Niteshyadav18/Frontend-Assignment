import React from 'react';
import { useAuth } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';

function App() {
  const { token } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {token ? <UserList /> : <LoginForm />}
    </div>
  );
}

export default App;