import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoute/AnimatedRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter className="App">
      <ToastContainer />
       <AnimatedRoutes/>
    </BrowserRouter>
  );
}

export default App;
