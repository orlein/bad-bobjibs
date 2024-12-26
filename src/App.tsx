import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './pages/home';
import Map from './pages/Map';
import Search from './pages/Search';
import Profile from './pages/Profile';

function App() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    /* </Router> */
  );
}

export default App;
