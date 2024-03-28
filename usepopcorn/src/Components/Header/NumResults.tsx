import { TempMovieData } from '../../Types/Types'

const NumResults = ({
    movies,
}: {
    movies: TempMovieData[]
}) => {
    return (
        <p className="num-results">
            Found <strong>{movies.length}</strong> results
        </p>
    )
}

export default NumResults
