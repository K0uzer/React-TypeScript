import { useEffect, useState } from 'react'
import { TempMovieData } from '../Types/Types'

const KEY = '96c2a11f'

const useMovies = (query: any, callback: any) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [movies, setMovies] = useState<TempMovieData[]>([])

    useEffect(() => {
        callback?.()
        const controller = new AbortController()
        const fetchMovies = async () => {
            try {
                setIsLoading((loading) => !loading)
                const res = await fetch(
                    `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                    { signal: controller.signal },
                )

                if (!res.ok)
                    throw new Error('Something went wrong with fetching movies')

                const data = await res.json()
                if (data.Response === 'False')
                    throw new Error('Movie not fount')

                setMovies(data.Search)
                setError('')
            } catch (err: unknown) {
                if (err instanceof Error) {
                    if (err.name !== 'AbortError') setError(err.message)
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

        return function () {
            controller.abort()
        }
    }, [query])

    return { movies, isLoading, error }
}

export default useMovies
