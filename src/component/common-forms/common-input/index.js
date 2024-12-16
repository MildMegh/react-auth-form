import React from "react";
import CommonInput from "../../common-input";

const formElementTypes = {
  INPUT: "input",
  INPUT: "select",
  INPUT: "radio",
  INPUT: "checkbox",
  INPUT: "textarea",
  

};

function CommonForm({ formControls, buttonText, formData, setFormData, onSubmit }) {
  // Render form elements
  function renderFormElement(getCurrentFormControl) {
    return (
      <div key={getCurrentFormControl.name} style={{ marginBottom: '15px' }}>
        <CommonInput
          type={getCurrentFormControl.type}
          placeholder={getCurrentFormControl.placeholder}
          value={formData[getCurrentFormControl.name] || ""}
          name={getCurrentFormControl.name}
          onChange={(event) =>
            setFormData({
              ...formData,
              [getCurrentFormControl.name]: event.target.value,
            })
          }
          style={{
            borderRadius: '10px', // Add rounded corners
            padding: '10px', // Optional: Inner spacing
            border: '1px solid #ccc', // Optional: Adds a border
            width: '100%', // Optional: Full width styling
            boxSizing: 'border-box', // Optional: Prevent overflow
          }}
        />
      </div>
    );
  }
  
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background:'lightgreen',
        alignItems: 'center',
        width: '105%',
        height:'150px',
        borderRadius: '10px',
      }}
    >
      {formControls.map((singleFormControl) => renderFormElement(singleFormControl))}
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default CommonForm;
