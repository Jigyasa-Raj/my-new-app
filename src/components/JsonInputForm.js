import React, { useState } from 'react';
import axios from 'axios';

const JsonInputForm = ({ setResponse, setOptionsVisible }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedJson = JSON.parse(jsonInput);
      const apiResponse = await axios.post('YOUR_API_ENDPOINT', parsedJson);
      setResponse(apiResponse.data);
      setError(null);
      setOptionsVisible(true);
    } catch (err) {
      setError('Invalid JSON');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Enter JSON here'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default JsonInputForm;
