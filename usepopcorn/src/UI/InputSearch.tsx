const InputSearch = ({
    query,
    setQuery,
}: {
    query: any
    setQuery: any
}) => {
    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    )
}

export default InputSearch
