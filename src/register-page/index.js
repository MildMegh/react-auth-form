import React, { useContext } from 'react';
import CommonForm from '../component/common-forms/common-input';
import { AuthContext } from '../context';
import { registerFormControls } from '../config';

function RegisterPage() {
  const { registerFormData, setRegisterFormData, registerOnSubmit } = useContext(AuthContext);

  // Safeguard for missing AuthContext values
  if (!registerFormData || !setRegisterFormData || !registerOnSubmit) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <p style={{ color: '#666', fontSize: '16px', textAlign: 'center' }}>
          Unable to load the registration form. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'green',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
          style={{
          width: '100%',
          maxWidth: '190px',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }} 
      >
        <h3 style={{ color: '#333', fontSize: '24px', marginBottom: '10px', textAlign: 'center' }}>
          Welcome
        </h3>
        <p style={{ color: '#666', fontSize: '16px', textAlign: 'center', marginBottom: '20px' }}>
          Please register below
        </p>
        <CommonForm
          formControls={registerFormControls}
          formData={registerFormData}
          setRegisterFormData={setRegisterFormData}
          onSubmit={registerOnSubmit}
          buttonText='save'
        />
      </div>
    </div>
  );
}

export default RegisterPage;
