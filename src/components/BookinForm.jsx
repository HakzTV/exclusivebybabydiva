// src/components/BookingForm.js
import  { useState, useEffect } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    startTime: '',
    endTime: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    // Load the Google API client library when the component mounts
    const loadGapi = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => {
        window.gapi.load('client:auth2', () => {
          window.gapi.auth2.init({
            client_id: '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',
            scope: 'https://www.googleapis.com/auth/calendar',
          });
        });
      };
      document.body.appendChild(script);
    };

    loadGapi();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that the end time is after the start time
    if (new Date(formData.endTime) <= new Date(formData.startTime)) {
      alert('End time must be after start time.');
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const user = await window.gapi.auth2.getAuthInstance().signIn();
      const token = user.getAuthResponse().access_token;
      await createEvent(token, formData);
      alert('Booking successful!');
    } catch (error) {
      console.error('Error signing in or creating event:', error);
      alert('Failed to book the event. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const createEvent = async (token, { name, email, phone, reason, startTime, endTime }) => {
    const event = {
      summary: `Booking: ${name}`,
      description: `Reason: ${reason}\nContact: ${name}, ${email}, ${phone}`,
      start: {
        dateTime: new Date(startTime).toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: new Date(endTime).toISOString(),
        timeZone: 'UTC',
      },
    };

    try {
      const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="reason"
        placeholder="Reason for booking"
        value={formData.reason}
        onChange={handleInputChange}
        required
      ></textarea>
      <input
        type="datetime-local"
        name="startTime"
        value={formData.startTime}
        onChange={handleInputChange}
        required
      />
      <input
        type="datetime-local"
        name="endTime"
        value={formData.endTime}
        onChange={handleInputChange}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Booking...' : 'Book Now'}
      </button>
    </form>
  );
};

export default BookingForm;
