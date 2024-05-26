// Import necessary modules from React and other dependencies
import React, { createContext, useState } from 'react';
import App from './App';

// Create a context for multi-step form
export const multiStepContext = createContext();

// StepContext component to manage the state of the multi-step form
const StepContext = () => {
  // Define state variables for current step, user data, final data, editing status, and edit index
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    number: '',
    email: '',
    country: '',
    district: '',
    city: '',
    landmark: '',
    zipcode: ''
  });
  const [finalData, setFinalData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Function to update user data
  const updateUser = (key, value) => {
    setUserData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  // Function to delete user data
  const deleteUser = (index) => {
    setFinalData(prevData => prevData.filter((_, i) => i !== index));
  };

  // Function to submit user data
  const submitData = () => {
    if (isEditing) {
      setFinalData(prevData =>
        prevData.map((data, index) =>
          index === editIndex ? userData : data
        )
      );
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setFinalData([...finalData, userData]);
    }
    setUserData({
      firstname: '',
      lastname: '',
      number: '',
      email: '',
      country: '',
      district: '',
      city: '',
      landmark: '',
      zipcode: ''
    });
    setStep(1);
  };

  // Function to edit user data
  const editUser = (index) => {
    setUserData(finalData[index]);
    setIsEditing(true);
    setEditIndex(index);
    setStep(1);
  };

  return (
    <multiStepContext.Provider value={{
      currentStep, setStep, userData, setUserData,
      finalData, setFinalData, updateUser, deleteUser,
      submitData, editUser, isEditing
    }}>
      <App />
    </multiStepContext.Provider>
  );
};

// Export the StepContext component as the default export
export default StepContext;


