import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import store from './app/store';
import RootLayout from './components/root-layout';
import Home from './pages/home';
import LoginPage from './pages/login';
import MapPage from './pages/map';
import NotFoundPage from './pages/not-found';
import ProfilePage from './pages/profile';
import SearchPage from './pages/search';
import SignupPage from './pages/signup';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="map" element={<MapPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
