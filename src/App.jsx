import logo from './logo.svg';
import styles from './css/App.module.css';
import { Routes, Route } from 'solid-app-router';
import Home from './pages/Home';
import Profile from './pages/Profile';
import History from './pages/History';
import Chess from './pages/Chess';
import Disclosure from './pages/Disclosure';
function App() {
  return (
    <Routes>

      <Route path="/solid-app-1" element={<Home />}></Route>
      <Route path="/solid-app-1/profile" element={<Profile />}></Route>
      <Route path="/solid-app-1/profile/:id" element={<Profile/>}></Route>
      <Route path="/solid-app-1/history" element={<History/>}></Route>
      <Route path="/solid-app-1/history/:id" element={<History/>}></Route>
      <Route path="/solid-app-1/chess/" element={<Chess/>}></Route>
      <Route path="/solid-app-1/chess/:gameId" element={<Chess/>}></Route>
      <Route path="/solid-app-1/disclosure" element={<Disclosure/>}></Route>


    </Routes>
    );
  }

export default App;
