import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);

  const downloadFile = () => {
    fetch("http://localhost:3001/download")
      .then((response) => {
        if (response.ok) {
          setStep(2);
        } else {
          setError("Download failed. Please try again.");
        }
      })
      .catch((error) => {
        setError("An error occurred: " + error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flipper Zero File Installer</h1>
        <div className="download-button">
          {step === 1 ? (
            <button onClick={downloadFile}>Begin Download</button>
          ) : (
            <p>Downloading...</p>
          )}
        </div>
        <p>Installation Step: {step} / 3</p>
        {error && <p>Error: {error}</p>}
      </header>
    </div>
  );
}

export default App;
