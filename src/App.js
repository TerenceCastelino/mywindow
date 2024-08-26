import { Routes, Route } from 'react-router-dom';
import Navbar from './_Pages/_Layout/_Navbar/Navbar';
import Home from './_Pages/_Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/ff" element={<Home />} />

      </Routes>


    </div>
  );
}

export default App;
