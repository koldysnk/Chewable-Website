import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Header } from './Header';
import { Privacy } from './Privacy';
import { Terms } from './Terms';


function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/privacy_policy" element={<Privacy />} />
          <Route path="/terms_of_service" element={<Terms />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
