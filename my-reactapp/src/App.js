import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewRecords from './password';
import EditRecord from './editinfor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewRecords />} />
        <Route path="/edit/:id" element={<EditRecord />} />
        <Route path="/edit" element={<EditRecord />} /> {/* Added this route for linking */}
      </Routes>
    </Router>
  );
}

export default App;
