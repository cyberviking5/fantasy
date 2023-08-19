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
        <Route path='/cricket' element={<Cric/>}/>
        <Route path='/hockey' element={<Hock/>}/>
        <Route path='/football' element={<Foot/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
