import React, { useEffect, useState } from 'react'
import StarRating from '../../StarRating'

type MovieItem = {
    Title: any
    Year: any
    Poster: any
    Runtime: any
    imdbRating: any
    Plot: any
    Released: any
    Actors: any
    Director: any
    Genre: any
}

const SelectedMovie = ({ selectedId, onCloseMovie }: any) => {
    const [movie, setMovie] = useState({
        Title: '',
        Year: '',
        Poster: '',
        Runtime: '',
        imdbRating: '',
        Plot: '',
        Released: '',
        Actors: '',
        Director: '',
        Genre: '',
    })
    console.log(movie)
    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    }: MovieItem = movie

    useEffect(() => {
        const getMovieDetails = async () => {
            const res = await fetch(
                `http://www.omdbapi.com/?apikey=96c2a11f&i=${selectedId}`,
            )
            const data = await res.json()
            setMovie(data)
        }
        getMovieDetails()
    }, [])

    return (
        <div className="details">
            <header>
                <button className="btn-back" onClick={onCloseMovie}>
                    &larr;
                </button>
                <img src={poster} alt={`Poster of ${movie}`} />
                <div className="details-overview">
                    <h2>{title}</h2>
                    <p>
                        {released} &bull; {runtime}
                    </p>
                    <p>
                        <span>🚀</span>
                        {imdbRating} IMDb rating
                    </p>
                </div>
            </header>
            <section>
                <div className="rating">
                    <StarRating
                        maxRating={10}
                        color="#fcc419"
                        className=""
                        size={27}
                        massages={[]}
                        defaultRating={1}
                        onSetRating
                    />
                </div>
                <p>
                    <em>{plot}</em>
                </p>
                <p>Starring {actors}</p>
                <p>Directed by {director}</p>
            </section>
        </div>
    )
}

export default SelectedMovie
