import React, { useState } from 'react';

function UploadImages() {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!image) {
      alert('Please select an image first!');
      return;
    }
    // Handle upload logic here, e.g., using Supabase or another storage service
    alert('Image uploaded successfully!');
  };

  return (
    <div className="upload-image-page">
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {image && <p>Selected file: {image.name}</p>}
    </div>
  );
}

export default UploadImages;
