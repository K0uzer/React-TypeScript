import React from 'react'
import WatchedMovie from './WatchedMovie'

const WatchedMovieList = ({
    watched,
    onDeleteWatched,
}: {
    watched: any
    onDeleteWatched: any
}) => {
    return (
        <ul className="list">
            {watched.map((movie: any) => (
                <WatchedMovie
                    key={movie.imdbID}
                    movie={movie}
                    onDeleteWatched={onDeleteWatched}
                />
            ))}
        </ul>
    )
}

export default WatchedMovieList
