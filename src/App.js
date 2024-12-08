import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './login-page';
import AuthPage from './private-route';
import RegisterPage from './register-page';
import ProfilePage from './profile-page';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route
          path="/profile-page"
          element={
            <AuthPage>
              <ProfilePage />
            </AuthPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
