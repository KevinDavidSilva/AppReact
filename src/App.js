import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

function App() {
  const showAlert = () => {
    Swal.fire({
      title: '¡Bien hecho!',
      text: 'Has integrado SweetAlert2 con éxito.',
      icon: 'success',
      confirmButtonText: 'Genial'
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="text-center p-4 bg-blue-500 text-white">
          <h1 className="text-3xl font-bold">¡Tailwind está funcionando!</h1>
        </div>
        <Button variant="contained" color="primary" onClick={showAlert}>
          ¡Hola Material-UI!
        </Button>
       
      </header>

    </div>
  );
}

export default App;
