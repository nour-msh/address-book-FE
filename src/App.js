import './App.css';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";



function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
