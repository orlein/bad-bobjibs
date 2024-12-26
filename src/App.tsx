import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Map from './pages/Map';
import Search from './pages/Search';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
