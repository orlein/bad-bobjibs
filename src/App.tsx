import { Provider } from 'react-redux';
import store from './app/store';
import { Route, Routes } from 'react-router';
// import Home from './pages/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/login';
import Page from './app/dashboard/page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes>
          <Route index element={<Page />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
