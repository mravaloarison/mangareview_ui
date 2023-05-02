import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Manga from './pages/Manga';
import Request from './pages/Request';
import Profile from './pages/Profile';
import MangaList from './pages/MangaList';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="bg-[#F5F5F5]">
        <Routes>
          <Route index element={<Home />} />
          <Route path='manga/:id' element={<Manga />} />
          <Route path='mangalist' element={<MangaList />} />
          <Route path='mangarequest' element={<Request />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
