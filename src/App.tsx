import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Map from './pages/map';
import Search from './pages/search';
import Profile from './pages/profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
