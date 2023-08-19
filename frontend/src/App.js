import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import Team from "./pages/Team/Team";
import Cric from "./components/Cricket/Cric";
import Hock from "./components/Hockey/Hock";
import Foot from "./components/Football/Foot";

function App() {
  return (
    <BrowserRouter className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/team" element={<Team />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
