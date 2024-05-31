import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../components/home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="title">TBDETECTX</h1>
        <h2 className="subtitle">Your one-stop solution for TB detection and prevention</h2>
        <hr />
        <div className="section">
          <h2>Detecting TB with Deep Learning</h2>
          <p>Advancements in deep learning technology have revolutionized the detection and diagnosis of TB. Deep learning algorithms can analyze medical images, such as chest X-rays and CT scans, to identify signs of TB with high accuracy.</p>
          <p>Explore the latest research and innovations in TB detection using deep learning techniques.</p>
          <Link to="/predict" className="button-primary">Predict with AI</Link>
        </div>
        <hr />
        <div className="section">
          <h2>Find Nearby Hospitals</h2>
          <p>If you're experiencing symptoms of TB or need medical assistance, find nearby hospitals and healthcare facilities quickly using our interactive map:</p>
          <Link to="/locate" className="button-primary">Find Hospitals</Link>
        </div>
        <hr />
        <div className="section">
          <h2>Chat with our AI Chat Bot</h2>
          <p>Have questions about TB? Chat with our AI-powered chatbot for instant answers and guidance. Our chatbot is available 24/7 to provide support and information on TB prevention, symptoms, and treatment options.</p>
          <Link to="/chat" className="button-primary">Chat Now</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
