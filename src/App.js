import React, { useState, useEffect } from 'react';
import JsonInputForm from './components/JsonInputForm';
import ResponseComponent from './components/ResponseComponent';

const App = () => {
  const [response, setResponse] = useState(null);
  const [optionsVisible, setOptionsVisible] = useState(false);

  useEffect(() => {
    document.title = 'RA2111027010184';
  }, []);

  return (
    <div>
      <h1>Your Roll Number</h1>
      <JsonInputForm setResponse={setResponse} setOptionsVisible={setOptionsVisible} />
      {optionsVisible && response && <ResponseComponent response={response} />}
    </div>
  );
};

export default App;
