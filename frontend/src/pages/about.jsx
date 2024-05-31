import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
function About() {
    return (
        <div>
            <Navbar />
            <h1>About Page</h1>
            <div>
        <h2>Tuberculosis (TB) Prevention</h2>
        <p>Tuberculosis (TB) is a bacterial infection that primarily affects the lungs but can also affect other parts of the body. Here are some basic prevention measures:</p>
        <ul>
          <li>Get vaccinated: If you live in an area with high TB rates or if you're at risk, consider getting vaccinated.</li>
          <li>Good hygiene practices: Cover your mouth and nose with a tissue or your elbow when coughing or sneezing to prevent the spread of TB bacteria.</li>
          <li>Healthy lifestyle: Maintain a healthy lifestyle with a balanced diet and regular exercise to boost your immune system.</li>
          <li>Avoid close contact: Try to avoid close contact with individuals who have active TB, especially if you have a weakened immune system.</li>
          <li>Follow medical advice: If you're diagnosed with TB or are at risk, follow the advice of healthcare professionals regarding treatment and prevention measures.</li>
        </ul>
        <p>For more detailed information on TB prevention and treatment, consult with a healthcare provider.</p>
      </div>
            <Footer />
        </div>
    );
}

export default About;