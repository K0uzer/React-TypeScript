import { TempWatchedData } from '../../Types/Types'

const average = (arr: number[]) =>
    arr.reduce((acc, item, index, array) => (acc + item) / array.length, 0)

const WatchedSummery = ({ watched }: { watched: TempWatchedData[] }) => {
    const avgImdbRating = average(
        watched.map((movie: TempWatchedData) => movie.imdbRating),
    )
    const avgUserRating = average(
        watched.map((movie: TempWatchedData) => movie.userRating),
    )
    const avgRuntime = average(
        watched.map((movie: TempWatchedData) => movie.runtime),
    )
    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>
                        {watched.length}
                        movies
                    </span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    )
}

export default WatchedSummery
