import React from 'react'
import WatchedMovie from './WatchedMovie'

const WatchedMovieList = ({
    watched,
}: {
    watched: any
}) => {
    return (
        <ul className="list">
            {watched.map((movie: any) => (
                <WatchedMovie
                    key={movie.imdbID}
                    movie={movie}
                />
            ))}
        </ul>
    )
}

export default WatchedMovieList
