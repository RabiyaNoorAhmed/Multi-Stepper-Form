// Import necessary modules from React and other dependencies
import React, { useContext } from 'react';
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table, Button } from '@mui/material';
import { multiStepContext } from '../StepContext';

// DisplayData component to show the final data in a table format
const DisplayData = () => {
  // Destructure finalData, deleteUser, and editUser from the multiStepContext
  const { finalData, deleteUser, editUser } = useContext(multiStepContext);

  return (
    <div>
      {/* TableContainer to center the table */}
      <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* Table component with minimum width and small size */}
        <Table border={1} sx={{ minWidth: "20%", justifyContent: 'center' }} size="small" aria-label="caption table">
          <TableHead>
            {/* TableRow for the header with background color and text color */}
            <TableRow style={{ backgroundColor: "yellow", color: 'white' }}>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>District</TableCell>
              <TableCell>City</TableCell>
              <TableCell>LandMark</TableCell>
              <TableCell>Zip Code</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Map through finalData to create rows for each data entry */}
            {finalData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.firstname}</TableCell>
                <TableCell>{data.lastname}</TableCell>
                <TableCell>{data.number}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.country}</TableCell>
                <TableCell>{data.district}</TableCell>
                <TableCell>{data.city}</TableCell>
                <TableCell>{data.landmark}</TableCell>
                <TableCell>{data.zipcode}</TableCell>
                <TableCell>
                  {/* Buttons for editing and deleting each row */}
                  <Button onClick={() => editUser(index)}>Edit</Button>
                  <Button onClick={() => deleteUser(index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

// Export the DisplayData component as the default export
export default DisplayData;


