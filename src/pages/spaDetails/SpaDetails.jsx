import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import './SpaDetails.css'
import { Link, useParams } from 'react-router-dom';

export default function SpaDetails() {
  const [movie, setMovie] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    if (id)
      getList()
  }, [id])

  const getList = async () => {
    const response = await fetch('http://api.tvmaze.com/search/shows?q=girls')
    const list = await response.json()
    setMovie(list.find(l => l.show.id === +id))
  }

  return (
    <div className="container">
      {movie &&
        <div className="movie">
          <img className="movie__img" src={movie.show?.image.medium} alt={movie.show?.name} />
          <h3 className="movie__title">{movie.show?.name}</h3>
          <h4 className="movie__publisher">
            {movie?.show.summary ?
              parse(`${movie?.show?.summary}`)
              : 'Description not available'}
          </h4>
          <button className="movie__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      }
    </div>
  )
}