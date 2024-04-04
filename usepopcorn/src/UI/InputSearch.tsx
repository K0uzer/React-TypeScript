import { useEffect, useRef } from 'react'

const InputSearch = ({ query, setQuery }: { query: any; setQuery: any }) => {
    const inputEl = useRef<any>(null)

    useEffect(() => {
        const callback = (e: any) => {
            if (document.activeElement === inputEl.current) return

            if (e.code === 'Enter') {
                inputEl.current.focus()
                setQuery('')
            }
        }
        document.addEventListener('keydown', callback)
        return () => document.addEventListener('keydown', callback)
    }, [setQuery])

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputEl}
        />
    )
}

export default InputSearch
