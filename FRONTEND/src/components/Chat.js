import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaComments } from 'react-icons/fa';
import './Chat.css';

function Chat() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const inactivityTimerRef = useRef(null);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (isChatOpen) {
      const initialMessage = {
        type: 'support',
        text: 'Bonjour. Comment pouvons-nous vous aider? مرحباً كيف يمكننا مساعدتكم؟'
      };
      setMessages([initialMessage]);
    }
  }, [isChatOpen]);

  useEffect(() => {
    if (messages.length > 0 && !isProcessing) {
      resetInactivityTimer();
    }
  }, [messages, isProcessing]);

  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      if (!isProcessing && isChatOpen) {
        // Optional: Handle inactivity if needed
      }
    }, 30000); // Adjust time as needed
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    const userMessage = { type: 'user', text: question };
    setMessages([...messages, userMessage]);

    setQuestion('');
    setIsProcessing(true);

    const typingMessage = { type: 'support', text: 'En train d\'écrire...' };
    setMessages(prevMessages => [...prevMessages, typingMessage]);

    try {
      const res = await fetch('http://127.0.0.1:8000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP error! Status: ${res.status}, Message: ${errorText}`);
      }

      const data = await res.json();
      const botMessage = { type: 'support', text: data.response };

      setMessages(prevMessages => {
        const updatedMessages = prevMessages.slice(0, -1); // Remove the typing indicator
        return [...updatedMessages, botMessage];
      });
    } catch (error) {
      console.error('Error:', error);
      alert(`Error asking question: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isProcessing) {
      e.preventDefault();
      handleAskQuestion();
    }
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      <div
        className={`chat-launcher ${isChatOpen ? 'chat-open' : ''}`}
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <FaComments className="chat-launcher-icon" />
      </div>

      {isChatOpen && (
        <div className="chat-widget-container" id="chat-widget">
          <div className="chat-widget-header">
            <div className="header-info">
              <div className="icon-container">
                <div className="status-indicator"></div>
              </div>
              <div className="header-text">
                <h3>On-Demand Healthcare Support</h3>
              </div>
            </div>
            <button className="close-button" onClick={handleChatClose}>⏻</button>
          </div>
          <div className="chat-widget-messages" ref={messageContainerRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.type === 'user' ? 'user-message-container' : 'support-message-container'}
              >
                {message.type === 'support' && (
                  <div className="message-icons live-chat">
                    <div className="from-icon"></div>
                  </div>
                )}
                <div
                  className={message.type === 'user' ? 'user-message' : 'support-message'}
                  style={message.type === 'user' ? { backgroundColor: '#696060', color: '#fff' } : { backgroundColor: '#dfe3e8', color: '#000' }}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          {isChatOpen && (
            <div className="chat-widget-input-container">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message ici..."
                rows="1"
              />
              <div className="input-buttons">
                <FaPaperPlane
                  className="send-icon"
                  onClick={handleAskQuestion}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Chat;
