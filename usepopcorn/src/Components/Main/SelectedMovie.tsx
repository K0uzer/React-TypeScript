import React, { useEffect, useRef, useState } from 'react'
import StarRating from '../../StarRating'
import useKey from '../../hooks/useKey'

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

const SelectedMovie = ({
    selectedId,
    closeMovie,
    addWatched,
    onSetRating,
    userRating,
    watched,
}: any) => {
    const [movie, setMovie] = useState({
        Title: null,
        Year: null,
        Poster: null,
        Runtime: null,
        imdbRating: null,
        Plot: null,
        Released: null,
        Actors: null,
        Director: null,
        Genre: null,
    })
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

    const countRef = useRef<number>(0)

    const isWatched = watched
        .map((movie: any) => movie.imdbId)
        .includes(selectedId)

    const handleAdd = () => {
        const newWatchedMovie = {
            imdbId: selectedId,
            title,
            year,
            poster,
            imdbRating: +imdbRating,
            runtime: +runtime.split(' ').at(0),
            userRating,
        }

        addWatched(newWatchedMovie)
        onSetRating('')
        closeMovie()
    }

    useKey('Escape', closeMovie)

    useEffect(() => {
        const getMovieDetails = async () => {
            const res = await fetch(
                `http://www.omdbapi.com/?apikey=96c2a11f&i=${selectedId}`,
            )
            const data = await res.json()
            setMovie(data)
        }
        getMovieDetails()
    }, [selectedId])

    useEffect(() => {
        if (!title) return
        document.title = `Movie | ${title}`

        return () => {
            document.title = 'usePopcorn'
        }
    }, [title])

    return (
        <div className="details">
            <header>
                <button className="btn-back" onClick={closeMovie}>
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
                        {imdbRating} Rating
                    </p>
                </div>
            </header>
            <section>
                <div className="rating">
                    {!isWatched ? (
                        <>
                            <StarRating
                                maxRating={10}
                                color="#fcc419"
                                className=""
                                size={27}
                                massages={[]}
                                defaultRating={0}
                                onSetRating={onSetRating}
                            />
                            {userRating > 0 ? (
                                <button
                                    className="btn-add"
                                    onClick={() => handleAdd()}
                                >
                                    + Add to list
                                </button>
                            ) : (
                                ''
                            )}
                        </>
                    ) : (
                        <p>
                            You rated with movie {userRating}
                            <span>🤩🤩</span>
                        </p>
                    )}
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
