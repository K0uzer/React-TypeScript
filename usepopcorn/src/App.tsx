import { useState } from 'react'
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
import useMovies from './hooks/useMovies'
import useLocalStorageState from './hooks/useLocalStorageState'

export default function App() {
    const [query, setQuery] = useState('')

    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [userRating, setUserRating] = useState('')
    const { movies, isLoading, error } = useMovies(query, handleCloseMovie)
    const [watched, setWatched] = useLocalStorageState([], 'watched')

    function handleCloseMovie() {
        setSelectedId(null)
    }

    const handleSelectedMovie = (id: string) =>
        setSelectedId((selectedId) => (id === selectedId ? null : id))

    const handleAddWatched = (movie: any) =>
        setWatched((watched: any) => [...watched, movie])

    const handleDeleteWatched = (id: number) => {
        setWatched((watched: any) =>
            watched.filter((movie: any) => movie.imdbID !== id),
        )
    }

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
                        <SelectedMovie
                            selectedId={selectedId}
                            closeMovie={handleCloseMovie}
                            addWatched={handleAddWatched}
                            onSetRating={setUserRating}
                            userRating={userRating}
                            watched={watched}
                        />
                    ) : (
                        <>
                            <WatchedSummery watched={watched} />
                            <WatchedMovieList
                                watched={watched}
                                onDeleteWatched={handleDeleteWatched}
                            />
                        </>
                    )}
                </Box>
            </Main>
        </>
    )
}
