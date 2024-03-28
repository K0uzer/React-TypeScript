import { useEffect, useState } from 'react'
import { TempMovieData, TempWatchedData } from './Types/Types'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import NumResults from './Components/Header/NumResults'
import MovieList from './Components/Main/MovieList'
import WatchedSummery from './Components/Main/WatchedSummery'
import WatchedMovieList from './Components/Main/WatchedMovieList'
import Box from './Components/Main/Box'
import Loader from './UI/Loader'
import CurError from './UI/CurError'
import InputSearch from './UI/InputSearch'
import SelectedMovie from './Components/Main/SelectedMovie'

const KEY = '96c2a11f'

export default function App() {
    const [query, setQuery] = useState('interstellar')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [movies, setMovies] = useState<TempMovieData[]>([])
    const [watched, setWatched] = useState<TempWatchedData[]>([])
    const [selectedId, setSelectedId] = useState<string | null>(null)

    const handleSelectedMovie = (id: string) =>
        setSelectedId((selectedId) => (id === selectedId ? null : id))

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading((loading) => !loading)
                const res = await fetch(
                    `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                )

                if (!res.ok)
                    throw new Error('Something went wrong with fetching movies')

                const data = await res.json()
                if (data.Response === 'False')
                    throw new Error('Movie not fount')

                setMovies(data.Search)
                setError(null)
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message)
                }
            } finally {
                setIsLoading((loading) => !loading)
            }
        }
        if (query.length < 2) {
            setMovies([])
            setError(null)
            return
        }
        fetchMovies()
    }, [query])

    return (
        <>
            <Header>
                <InputSearch query={query} setQuery={setQuery} />
                <NumResults movies={movies} />
            </Header>
            <Main>
                <Box>
                    {isLoading && <Loader />}
                    {!isLoading && !error && (
                        <MovieList
                            movies={movies}
                            onSelectMovie={handleSelectedMovie}
                        />
                    )}
                    {error && <CurError text={error} />}
                </Box>
                <Box>
                    {selectedId ? (
                        <SelectedMovie selectedId={selectedId} />
                    ) : (
                        <>
                            <WatchedSummery watched={watched} />
                            <WatchedMovieList watched={watched} />
                        </>
                    )}
                </Box>
            </Main>
        </>
    )
}
