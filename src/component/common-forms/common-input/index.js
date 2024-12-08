import React from "react";
import CommonInput from "../../common-input";

const formElementTypes = {
  INPUT: "input",
};

function CommonForm({ formControls = [], buttonText = "Submit", formData = {}, setFormData, onSubmit }) {
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
        alignItems: 'center',
        width: '100%',
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
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default CommonForm;
