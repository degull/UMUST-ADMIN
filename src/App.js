
// Import necessary dependencies
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Main from './MainComponents/Main';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
