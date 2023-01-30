import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar';
import LayoutRoutes from './LayoutRoutes/LayoutRoutes';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
<LayoutRoutes/>
    </div>
  );
}

export default App;
