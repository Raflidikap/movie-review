import './App.css';
import Home from './pages/Home';
import DetailReview from './pages/DetailReview';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detailReview/:id" element={<DetailReview/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
