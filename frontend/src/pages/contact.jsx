import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
function Contact() {
    return (
        <div>
            <Navbar />
            <h1>Contact Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Submit</button>
            </form>
            <Footer />
        </div>
    );
}

export default Contact;