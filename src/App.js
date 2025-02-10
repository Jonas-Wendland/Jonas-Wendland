import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Homepage from "./pages/Homepage";


export default function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes> 
    </Router>
  );
}
