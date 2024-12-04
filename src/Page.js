import React from 'react';
import "./App.css";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import Sidebar from "./Layout/sidebar";

function App() {
  const showAlert = () => {
    Swal.fire({
      title: "¡Bien hecho!",
      text: "Has integrado SweetAlert2 con éxito.",
      icon: "success",
      confirmButtonText: "Genial",
    });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="App flex-1">
        <header className="App-header">
          <img
            src="https://i.redd.it/4ur8wlpamjo91.gif"
            className="App-logo"
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://i.redd.it/grlw0gf12gbd1.gif"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="text-center p-4 text-white">
            <h1 className="text-3xl font-bold">¡Tailwind está funcionando!</h1>
          </div>
          <Button variant="contained" color="primary" onClick={showAlert}>
            ¡Hola Material-UI!
          </Button>
        </header>
      </div>
    </div>
  );
}

export default App;