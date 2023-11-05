import React, { useState } from 'react';

const StateDropdownForm = () => {
  const [selectedState, setSelectedState] = useState('');

  const statesOfIndia = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ];

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <h2>State Dropdown Form</h2>
      <form>
        <div>
          <label htmlFor="stateDropdown">Select State:</label>
          <select id="stateDropdown" value={selectedState} onChange={handleStateChange}>
            <option value="">Select a state</option>
            {statesOfIndia.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </form>
      {selectedState && <p>Selected State: {selectedState}</p>}
    </div>
  );
};

export default StateDropdownForm;
