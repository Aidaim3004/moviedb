import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/";
import Cartoons from "./pages/Cartoons";
import MovieInfo from "./pages/MovieInfo";
import Films from "./pages/Films";
import Header from "./components/Header/Header";
import Series from "./pages/Series";

const App = () => {
  return (
    <BrowserRouter>
        <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/films" element={<Films/>} />
          <Route path="/series" element={<Series/>} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          <Route path="/cartoons" element={<Cartoons />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;