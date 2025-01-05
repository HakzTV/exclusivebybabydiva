import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Toggle chat visibility
  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!message) {
      setStatus('Message is required.');
      return;
    }

    // Ensure the recipient number is formatted correctly
    const recipientNumber = '233543566937'; // Replace with your desired recipient number (without "+")

    // Encode the message and construct the WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setMessage(''); // Reset message after sending
    setStatus('');  // Clear any previous status
  };

  return (
    <div>
      {/* Sticky chat button */}
      <div
        className="whatsapp-button"
        onClick={toggleChat}
      >
        <span className="whatsapp-icon">
          <FontAwesomeIcon icon={faWhatsapp} />
        </span>
      </div>

      {/* Chat form */}
      {isOpen && (
        <div className="whatsapp-chat-form">
          <h4>Chat with us on WhatsApp</h4>
          <textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="whatsapp-textarea"
          />
          <button
            onClick={sendMessage}
            className="whatsapp-send-button"
          >
            Send Message
          </button>
          {status && <p className="status-message">{status}</p>}
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
