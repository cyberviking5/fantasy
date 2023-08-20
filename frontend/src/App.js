import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoute/AnimatedRoutes";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter className="App">
      <ToastContainer />
       <AnimatedRoutes/>
    </BrowserRouter>
  );
}

export default App;
