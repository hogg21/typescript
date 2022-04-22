import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UserPage from './UserPage';
import TodoPage from './TodoPage';



const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="todos" element={<TodoPage />} />
      <Route path="users" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
