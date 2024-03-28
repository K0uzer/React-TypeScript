import { TempMovieData } from '../../Types/Types'
import Movie from './Movie'

const MovieList = ({
    movies,
    onSelectMovie,
}: {
    movies: TempMovieData[]
    onSelectMovie: any
}) => {
    return (
        <ul className="list list-movies">
            {movies?.map((movie: any) => (
                <Movie
                    key={movie.imdbID}
                    movie={movie}
                    onSelectMovie={onSelectMovie}
                />
            ))}
        </ul>
    )
}

export default MovieList
