// Import necessary modules from React and other dependencies
import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

// FirstStep component to handle the first step of the multi-step form
const FirstStep = () => {
  // Destructure setStep, userData, and updateUser from the multiStepContext
  const { setStep, userData, updateUser } = useContext(multiStepContext);

  return (
    <div>
      <div>
        {/* TextField for the first name input */}
        <TextField 
          label="First Name" 
          value={userData.firstname}
          onChange={(e) => updateUser('firstname', e.target.value)}
          margin='normal' 
          variant='outlined' 
          color='secondary'
        />
      </div>
      <div>
        {/* TextField for the last name input */}
        <TextField 
          label="Last Name"
          value={userData.lastname}
          onChange={(e) => updateUser('lastname', e.target.value)}
          margin='normal' 
          variant='outlined' 
          color='secondary'
        />
      </div>
      <div>
        {/* TextField for the contact number input */}
        <TextField 
          label="Contact Number"
          value={userData.number}
          onChange={(e) => updateUser('number', e.target.value)}
          margin='normal' 
          variant='outlined' 
          color='secondary'
        />
      </div>
      <div>
        {/* Button to proceed to the next step */}
        <Button variant='contained' onClick={() => setStep(2)} color='primary'>Next</Button>
      </div>
    </div>
  );
};

// Export the FirstStep component as the default export
export default FirstStep;

