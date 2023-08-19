import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import Team from "./pages/Team/Team";
import Fb from "./pages/Nolink/Fb/Fb";
import Ig from "./pages/Nolink/Ig/Ig";
import Ln from "./pages/Nolink/Ln/Ln";

function App() {
  return (
    <BrowserRouter className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/team" element={<Team />} />
        <Route path="/fb" element={<Fb/>} />
        <Route path="/ig" element={<Ig/>} />
        <Route path="/ln" element={<Ln/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
