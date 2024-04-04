import { useEffect, useState } from 'react'

const useLocalStorageState = (initialState: any, key: any) => {
    const [value, setValue] = useState(() => {
        const setValue: any = localStorage.getItem(key)
        return setValue ? JSON.parse(setValue) : initialState
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}

export default useLocalStorageState
