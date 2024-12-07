import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Detail from "./Detail";
import Chart from "./Chart";

function App() {
  return (
    <Router>
      <div className="container-fluid px-3">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Chart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
