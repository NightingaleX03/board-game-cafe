// pages/home.js
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import eventsData from '../components/events.json'; // Import events data
import '../styles/EventsCalendar.css'; // Import custom CSS

const EventsCalendarPage = () => {
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState(eventsData); // Use imported events data
  const navigate = useNavigate();

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault(); // Prevent the default browser behavior
    setSelectedEvent(info.event); // Set the selected event
    setShow(true); // Open the modal
  };

  const handleClose = () => {
    setShow(false); // Close the modal
    setSelectedEvent(null); // Clear the selected event
  };

  const handleGoToReservations = () => {
    navigate('/reservations');
  };

  return (
    <div>
      <h1>Upcoming Events</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent ? selectedEvent.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent ? selectedEvent.extendedProps.description : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleGoToReservations}>
            Go to Reservations
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventsCalendarPage;
