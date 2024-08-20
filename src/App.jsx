import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Home from "../src/pages/Home";
import Reset from "../src/pages/Reset";
import PrivateRoutes from "./pages/routes/PrivateRoutes";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<PrivateRoutes />} >
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} exact/>
          </Route>
         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
