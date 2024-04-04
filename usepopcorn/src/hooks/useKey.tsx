import { useEffect } from 'react'

const useKey = (key: any, action: any) => {
    useEffect(() => {
        const callback = (e: any) => {
            if (e.code.toLoverCase() === key.toLoverCase()) action()
        }

        document.addEventListener(key, callback)

        return document.removeEventListener(key, callback)
    }, [action, key])
}

export default useKey
