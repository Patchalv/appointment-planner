import React, { useMemo } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);
    
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text" 
          name="title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required
          placeholder="Appointment Name"
          aria-label="Appointment Name"
          />
      </label>
      <br />
      <ContactPicker 
        name="contact"
        value={contact}
        contacts={contactNames}
        onChange={(e) => setContact(e.target.value)} 
      />
      <br />
      <label>
        <input 
          type="date" 
          name="date"
          min={getTodayString}
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required
          placeholder="Appointment Date"
          aria-label="Appointment Date"
          />
      </label>
      <br />
      <label>
        <input 
          type="time" 
          name="time"
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          required
          placeholder="Appointment Time"
          aria-label="Appointment Time"
          />
      </label>
      <br />
      <input type="submit" value="Add Appointment" aria-label="Add Appointment"/>
    </form>
  );
};
