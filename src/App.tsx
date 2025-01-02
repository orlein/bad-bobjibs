import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import store from './app/store';
import RootLayout from './components/root-layout';
import Home from './pages/home';
import MapPage from './pages/map';
import ProfilePage from './pages/profile';
import SearchPage from './pages/search';
import NotFoundPage from './pages/not-found';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="map" element={<MapPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
