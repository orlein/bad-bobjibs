import { Routes, Route } from 'react-router';
import Home from './pages/home';
import SearchMap from './pages/search-map';
import Report from './pages/report';
import Profile from './pages/profile';
import RestaurantDetail from './pages/restaurant-detail';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchMap />} />
        <Route path="/report" element={<Report />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
