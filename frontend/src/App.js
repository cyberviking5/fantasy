import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoute/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter className="App">
       <AnimatedRoutes/>
    </BrowserRouter>
  );
}

export default App;
