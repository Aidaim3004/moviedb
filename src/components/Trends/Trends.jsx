import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import Spinner from "../../assets/Spinner";
import './Trends.css'

const Trends = () => {
  const [trends, setTrends] = useState([])
  const [time, setTime] = useState('day')
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    axios(`https://api.themoviedb.org/3/trending/movie/${time}?language=ru-RUS&sort_by=popularity.desc&api_key=6f19f87e3380315b9573c4270bfc863c`)
      .then((res) => {
        setTrends(res.data.results)
        setIsLoading(false)
      })
  }, [time])

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
        <div className="popular"><h4>В тренде </h4></div>
        <button className="selector-btn" onClick={() => setTime('day')}>Сегодня</button>
        <button className="selector-btn" onClick={() => setTime('week')}>На этой неделе</button>
      </div>
      <div className="scroller">
        {
          trends.map((item) => (
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
                <span className="card-year">{formatDate(item.release_date)}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Trends;