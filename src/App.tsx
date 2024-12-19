import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
