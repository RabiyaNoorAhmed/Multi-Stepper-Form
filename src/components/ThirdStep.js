// Import necessary modules from React and other dependencies
import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

// ThirdStep component to handle the third step of the multi-step form
const ThirdStep = () => {
  // Destructure setStep, userData, updateUser, submitData, and isEditing from the multiStepContext
  const { setStep, userData, updateUser, submitData, isEditing } = useContext(multiStepContext);

  return (
    <div>
      <div>
        {/* TextField for the city input */}
        <TextField 
          label="City"
          value={userData.city}
          onChange={(e) => updateUser('city', e.target.value)}
          margin='normal' 
          variant='outlined' 
          color='secondary'
        />
      </div>
      <div>
        {/* TextField for the landmark input */}
        <TextField 
          label="LandMark"
          value={userData.landmark}
          onChange={(e) => updateUser('landmark', e.target.value)}
          margin='normal' 
          variant='outlined' 
          color='secondary'
        />
      </div>
      <div>
        {/* TextField for the zip code input */}
        <TextField 
          label="Zip Code"
          value={userData.zipcode}
          onChange={(e) => updateUser('zipcode', e.target.value)}
          margin='normal' 
          variant='outlined' 
          color='secondary'
        />
      </div>
      <div>
        {/* Button to go back to the previous step */}
        <Button variant='contained' onClick={() => setStep(2)} color='secondary'>Back</Button>
        {/* Button to submit or update the data */}
        <Button variant='contained' onClick={submitData} color='primary'>{isEditing ? 'Update' : 'Submit'}</Button>
      </div>
    </div>
  );
};

// Export the ThirdStep component as the default export
export default ThirdStep;

