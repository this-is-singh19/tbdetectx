import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import '../components/chat.css'; 
import Footer from '../components/footer';
import LOGO from '../components/Gemini-Logo.png' ;
function Chat() {
    const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Add user question to messages
        setMessages(prevMessages => [...prevMessages, { type: 'user', text: question }]);

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/chat/', { question }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const responseData = res.data;
            // Add bot response to messages
            setMessages(prevMessages => [...prevMessages, { type: 'bot', text: responseData.data.text }]);
            setQuestion('');
        } catch (error) {
            setError('An error occurred. Please try again later.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className="chat-instructions">
                    <h1 className="chat-title">Chat with our AI</h1>
                    <p>1. Type a question in the input field</p>
                    <p>2. Click the "Send" button</p>
                    <p>3. The chatbot will respond with an answer</p>
                    <p>4. Repeat steps 1-3 to ask more questions</p>
                    <p>5. Enjoy!</p>
                </div>
            </div>    
            <div className="chat-container">
                <div className="chat-instructions">
                    <h1 className="chat-title">Powered By</h1>
                    <img src={LOGO} className='imagea'/>
                    <p>The Gemini API stands at the forefront of technological innovation, offering developers a robust set of tools for building applications with advanced AI capabilities.</p>
                    <p> Its technicality lies in its ability to process vast amounts of data with precision and speed, leveraging machine learning algorithms to deliver accurate and contextually relevant results.</p>
                    <p>Furthermore, the Gemini API's technicality is evident in its security features. It employs state-of-the-art encryption and authentication protocols to ensure that all data remains secure and private.</p>
                    <p> This is crucial for developers who handle sensitive information and require a reliable API to maintain data integrity.</p>                   
                </div>
                <div className="chat-wrapper">
                    <div className="chat-messages">
                        {error && <p className="error">{error}</p>}
                        <div className="response-container">
                            {messages.map((msg, index) => (
                                <div key={index} className={`chat-bubble ${msg.type}`}>
                                    {msg.text.split('*').map((line, index) => (
                                        <p key={index}>
                                            {line.split('**').map((segment, i) => (
                                                i % 2 === 0 ? (
                                                    segment
                                                ) : (
                                                    <strong key={i}>{segment}</strong>
                                                )
                                            ))}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="chat-input-section">
                        <form className="chat-form" onSubmit={handleSubmit}>
                            <input
                                className="chat-input"
                                type="text"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Ask a question..."
                            />
                            <button className="chat-button" type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Chat;
