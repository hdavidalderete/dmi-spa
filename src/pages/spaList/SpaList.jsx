import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import parse from 'html-react-parser';
import './SpaList.css'

export default function SpaList() {
  const [showList, setShowList] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    const response = await fetch('http://api.tvmaze.com/search/shows?q=girls')
    const list = await response.json()
    setShowList(list)
  }

  return (
    <div className="container">
      <div className="row">
        {showList.map((movie) => {
          return (
            <div key={movie.show.id} className="col-md-3" style={{ marginBottom: "2rem" }}>
              <div className="movies__box">
                <img
                  onClick={() => push(`spa/${movie.show.id}`)}
                  className="movies__img"
                  src={movie?.show?.image?.medium}
                  alt={movie?.show?.name} />
                <div className="movies__text">
                  <h5 className="movies__title">
                    {movie?.show?.name}
                  </h5>
                  <p className="movies__subtitle">
                    <span>
                      {movie?.show.summary ?
                        parse(`${movie?.show?.summary}`)
                        : 'Description not available'}

                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}