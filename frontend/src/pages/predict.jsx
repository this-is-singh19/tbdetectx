import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('gray'); // Start with gray background

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      setError(null);
      setResult(null);
      setLoading(true);
  
      if (!image) {
        throw new Error("Please select an image.");
      }
  
      const blob = await fetch(image).then((res) => res.blob());
  
      const formData = new FormData();
      formData.append('image', blob, 'image.png');
  
      const response = await axios.post('http://127.0.0.1:8000/api/predict/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (!response.data) {
        throw new Error('Failed to get result from server.');
      }
  
      setResult(response.data.result || "No result available");
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect to update background color based on result
  useEffect(() => {
    if (result === "The patient does not have TB.") {
      setBackgroundColor('green');
    } else if (result === "The patient has TB.") {
      setBackgroundColor('red');
    }
      else{
      setBackgroundColor('gray');
    }
  }, [result]);

  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>Instructions</h1>
        <p>
          1. Select an image file (PNG, JPG, etc.) that you want to classify.
        </p>
        <p>2. Click the "Submit" button to get the classification result.</p>
        <p>3. The background color will change based on the result.</p> 
      </div>
      <div style={{ backgroundColor: backgroundColor, height: '450px', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1>Image Uploader</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className='choose'
        />

        {image && (
          <div>
            <h2>Preview:</h2>
            <img src={image} alt="Uploaded" style={{ maxWidth: '100px', marginBottom: '10px' }} />
          </div>
        )}

        <button className='submit-button' onClick={handleSubmit} disabled={loading}>Submit</button>
        {loading && <p>Loading...</p>}
        {error && (
          <div style={{ color: 'red' }}>
            <p>{error}</p>
          </div>
        )}
        {result && (
          <div>
            <h2>Result:</h2>
            <p>{result}</p>
          </div>
        )}
      </div>
      <Footer />  
    </div>
    
  );
}

export default App;
