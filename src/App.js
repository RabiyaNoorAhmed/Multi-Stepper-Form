// Import necessary modules from React and other dependencies
import React, { useContext } from 'react';
import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { Stepper, StepLabel, Step } from '@mui/material';
import { multiStepContext } from './StepContext';
import DisplayData from './components/DisplayData';

// Main App component
const App = () => {
  // Destructure currentStep and finalData from the multiStepContext
  const { currentStep, finalData } = useContext(multiStepContext);

  // Function to render the appropriate step component based on the current step
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
        return null;
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {/* Header section */}
        <h2 style={{ color: "red", textDecoration: "underline" }}>Multi Step Form</h2>

        {/* Stepper component to indicate the current step */}
        <div className='center-stepper'>
          <Stepper style={{ width: '30%' }} activeStep={currentStep - 1} orientation='horizontal'>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>

        {/* Render the current step component */}
        {showStep(currentStep)}

        <br />

        {/* Display final data if it exists */}
        {finalData.length > 0 && <DisplayData />}
      </header>
    </div>
  );
};

// Export the App component as the default export
export default App;

