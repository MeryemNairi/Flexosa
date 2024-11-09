import React, { useState, useEffect, useRef } from 'react';
import './FileUpload.css';

function FileUpload() {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  const uploadContainerRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files];
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      setIsProcessing(true);
      const response = await fetch('http://127.0.0.1:8000/process', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }

      const data = await response.json();
      console.log('Process response:', data);
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
      alert(`Error processing files: ${error.message}`);
    } finally {
      setIsProcessing(false);
      setFiles([]); // Optionally clear the selected files after upload
      setIsUploadVisible(false); // Hide upload section after processing
    }
  };

  const handleToggleUpload = () => {
    setIsUploadVisible(!isUploadVisible);
  };

  const handleClickOutside = (event) => {
    if (
      uploadContainerRef.current &&
      !uploadContainerRef.current.contains(event.target)
    ) {
      setIsUploadVisible(false);
    }
  };

  useEffect(() => {
    if (isUploadVisible) {
      document.addEventListener('click', handleClickOutside, true);
    } else {
      document.removeEventListener('click', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isUploadVisible]);

  return (
    <div className="file-upload-wrapper">
      {!isUploadVisible && (
        <button onClick={handleToggleUpload} className="toggle-upload-button">
          Show Upload
        </button>
      )}
      <div
        ref={uploadContainerRef}
        className={`file-upload-container ${isUploadVisible ? 'visible' : ''}`}
      >
        <h1 className="title">Upload Your Files</h1>
        <div className="upload-section">
          <input 
            type="file" 
            id="file-input" 
            multiple 
            onChange={handleFileChange} 
            className="file-input"
          />
          <label htmlFor="file-input" className="upload-button">
            Select Files
          </label>
          <button 
            onClick={handleUpload} 
            disabled={isProcessing || files.length === 0}
            className={`upload-submit ${isProcessing ? 'processing' : ''}`}
          >
            {isProcessing ? 'Processing...' : 'Start the process'}
          </button>
        </div>
        <div className="file-list">
          {files.length > 0 && (
            <ul>
              {Array.from(files).map((file, index) => (
                <li key={index} className="file-item">
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
