import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Reset from "./pages/Reset";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          < Route path="/login" element={<Login />} />
          < Route path="/home" element={<Home />} />
          < Route path="/register" element={<Register />} />
          < Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
