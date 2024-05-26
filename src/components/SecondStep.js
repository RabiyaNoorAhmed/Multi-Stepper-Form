// Import necessary modules from React and other dependencies
import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

// SecondStep component to handle the second step of the multi-step form
const SecondStep = () => {
  // Destructure setStep, userData, and updateUser from the multiStepContext
  const { setStep, userData, updateUser } = useContext(multiStepContext);

  return (
    <div>
      <div>
        {/* TextField for the email input */}
        <TextField 
          label="Email" 
          value={userData.email}
          onChange={(e) => updateUser('email', e.target.value)}
          margin='normal' 
          variant='outlined' 
          color='secondary'
        />
      </div>
      <div>
        {/* TextField for the country input */}
        <TextField 
          label="Country" 
          value={userData.country}
          onChange={(e) => updateUser('country', e.target.value)}
          margin='normal' 
          variant='outlined' 
          color='secondary'
        />
      </div>
      <div>
        {/* TextField for the district input */}
        <TextField 
          label="District"
          value={userData.district}
          onChange={(e) => updateUser('district', e.target.value)}
          margin='normal' 
          variant='outlined' 
          color='secondary'
        />
      </div>
      <div>
        {/* Button to go back to the previous step */}
        <Button variant='contained' onClick={() => setStep(1)} color='secondary'>Back</Button>
        {/* Button to proceed to the next step */}
        <Button variant='contained' onClick={() => setStep(3)} color='primary'>Next</Button>
      </div>
    </div>
  );
};

// Export the SecondStep component as the default export
export default SecondStep;

