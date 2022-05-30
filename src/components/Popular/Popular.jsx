import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import Spinner from "../../assets/Spinner";
import './Popular.css'

const Popular = () => {
  const [popular, setPopular] = useState([])
  const [mediaType, setMediaType] = useState('movie')
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
      axios(`https://api.themoviedb.org/3/discover/${mediaType}?language=ru-RUS&sort_by=popularity.desc&api_key=6f19f87e3380315b9573c4270bfc863c`)
        .then((res) => {
          setPopular(res.data.results)
          setIsLoading(false)
        })
    },
    [mediaType])

  if (isLoading) {
    return <Spinner/>
  }


  const formatDate = (date) => {
    const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    const reversedDate = date.split('-').reverse()
    reversedDate[1] = month[reversedDate[1] - 1]
    return reversedDate.join(' ')
  }

  return (
    <div>
      <div className="selector flex">
        <div className="popular"><h4>Что популярно </h4></div>
        <button className="selector-btn" onClick={() => setMediaType('movie')}>В кинотеатрах</button>
        <button className="selector-btn" onClick={() => setMediaType('tv')}>По ТВ</button>
      </div>
      <div className="scroller">
        {
          popular.map((item) => (
            <div className="movie-card">
              <div className="card-img">
                <Link to={`/movie/${item.id}`}>
                  <img src={`/t/p/w440_and_h660_face${item.poster_path}`} alt=""/>
                </Link>
                <div className="consensus">
                  <div className="info-rating">{`${item.vote_average * 10}%`}</div>
                </div>
              </div>
              <div className="card-content">
                <Link to={`/movie/${item.id}`}>
                  <h5 className="card-title">{item.title}</h5>
                </Link>
                <span className="card-year">{item.release_date?formatDate(item.release_date)|| formatDate(item.last_air_date): ""}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Popular;