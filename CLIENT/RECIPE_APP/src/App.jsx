import { useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from './Components/Navigation_Comp';
import Auth_Comp from "./Components/Auth_Comp";
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <NavBarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route
            path="/saved"
            element={<p>Saved Post component will display</p>}
          />
          <Route
            path="/create"
            element={<p>create Post component will display</p>}
          />
          <Route
            path="/auth"
            element={<Auth_Comp/>}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
