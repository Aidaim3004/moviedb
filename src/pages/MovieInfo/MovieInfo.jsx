import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import FastAverageColor from "fast-average-color";
import axios from 'axios';
import './MovieInfo.css'

const MovieInfo = () => {
  const {id} = useParams()
  const [film, setFilm] = useState({})
  const [credits, setCredits] = useState([])
  const [color, setColor] = useState('')
  const [filmLoader, setFilmLoader] = useState(true);
  const [creditLoader, setCreditLoader] = useState(true);

  function onImageLoad(e) {
    new FastAverageColor()
      .getColorAsync(e.target)
      .then((imgColor) => {
        setColor(`rgba(${imgColor.value.slice(0, 3).join(',')}, 0.4)`)
      })
  }

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${id}?language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
      .then((res) => {
        setFilm(res.data)
        setFilmLoader(false)
      })
    axios(`https://api.themoviedb.org/3/movie/${id}/credits?language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
      .then((res) => {
        setCredits(res.data)
        setCreditLoader(false)
      })
  })

  if (filmLoader || creditLoader) {
    return 'Loading.....'
  }

  return (
    <div className="movie-header"
         style={{backgroundImage: `url(/t/p/w1920_and_h800_multi_faces${film.backdrop_path})`}}>
      <div className="custom_bg" style={{backgroundColor: color}}>
        <div className="poster-wrapper">
          <div className="poster">
            <img onLoad={onImageLoad}
                 crossOrigin="anonymous"
                 src={`/t/p/w600_and_h900_bestv2${film.poster_path}`}
                 alt=""/>
          </div>
        </div>
        <div className="movie-header-info">
          <h4 className="film-name"> {film.title}</h4>
          <div className="flex">
            <p className="release-date">{film.release_date}</p>
            <p className="info-movie">
              {
                film.genres.map((item) => (
                  <Link to={`/films/${item.id}`} key={item.id}> {item.name}</Link>
                ))
              }
            </p>
          </div>
          <p> {`Длительность: ${film.runtime} минут`}</p>
          <div className="flex">
            <div className="rating">{film.vote_average}</div>
            <p>Пользовательский счёт</p>
          </div>
          <p>{film.tagline}</p>
          <h5 className="film-desc">Обзор</h5>
          <p>{film.overview}</p>

        </div>
      </div>
    </div>
  );
};

export default MovieInfo;