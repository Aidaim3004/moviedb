import React, {useEffect, useState} from 'react';
import Trends from "../../components/Trends";
import './Homepage.css'
import Popular from "../../components/Popular";
import axios from "axios";
import Spinner from "../../assets/Spinner";
import Trailer from "../../components/Trailer";


const Homepage = () => {
  const [box, setBox] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/trending/movie/day?language=ru-RUS&sort_by=popularity.desc&api_key=08461d9c0888c7c07b11dcd7fda95b8d`)
      .then((res) => {
        setBox(res.data)
        setLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Spinner/>
  }


  return (
    <div>
      <div className="picture">
        <div className="title">
          <h1 className="box-title">Добро пожаловать.</h1>
          <h3 className="box-desc">Миллионы фильмов, сериалов и людей. Исследуйте сейчас</h3>
        </div>
        <div className="box-search">
          <input className="search-input" type="text" placeholder="Найти фильм, сериал, персону..."/>
          <button className="search-btn">Искать</button>
        </div>
      </div>
      <Popular/>
      <Trailer/>
      <Trends/>
    </div>
  );
};

export default Homepage;