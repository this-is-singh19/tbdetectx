import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import '../components/locate.css'; // Import a CSS file for styling (create if not exists)

function Locate() {
    const [address, setAddress] = useState('');
    const [hospitals, setHospitals] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/hospital/', { address });
            setHospitals(response.data.hospitals);
        } catch (error) {
            setError('Failed to fetch hospitals. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <div> {/* Added a container class for styling */}
            <Navbar />
            <div className="locate-content"> {/* Added a content class for styling */}
                <h1>Locate Hospitals</h1>
                <form onSubmit={handleSubmit} className="locate-form"> {/* Added a form class for styling */}
                    <input 
                        type="text"
                        placeholder="Enter address"
                        value={address}
                        onChange={handleChange}
                    />
                    <button type="submit">Search Hospitals</button>
                </form>
                {error && <p className="error-message">{error}</p>} {/* Added a class for error message */}
                <ul className="hospital-list"> {/* Added a class for hospital list */}
                    {hospitals.map((hospital, index) => (
                        <li key={index} className="hospital-item"> {/* Added a class for hospital item */}
                            <p><strong>Name:</strong> {hospital.name}</p>
                            <p><strong>Address:</strong> {hospital.address}</p>
                            <hr className="hospital-divider" /> {/* Added a class for hr styling */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Locate;
