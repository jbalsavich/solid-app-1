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
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/profile/:id" element={<Profile/>}></Route>
      <Route path="/history" element={<History/>}></Route>
      <Route path="/history/:id" element={<History/>}></Route>
      <Route path="/chess/" element={<Chess/>}></Route>
      <Route path="/chess/:gameId" element={<Chess/>}></Route>
      <Route path="/disclosure" element={<Disclosure/>}></Route>

    </Routes>
    );
  }

export default App;
