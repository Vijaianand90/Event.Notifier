import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './components/EventForm';

function App() {
  return (
    <div className="App">
      {/* <Timer eventDate="7/2/2020 13:00:00"/> */}
       <EventForm/>
    </div>
  );
}

export default App;
