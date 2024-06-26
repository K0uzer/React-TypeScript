import { useSearchParams } from 'react-router-dom'

import styles from './Map.module.css'

const Map = () => {
    const { searchParams, setSearchParams } = useSearchParams()
    // console.log(searchParams)
    const lat = searchParams?.get('lat')
    const lng = searchParams?.get('lng')
    return (
        <div className={styles.mapContainer}>
            <h1>Map</h1>
            <h2>
                Position: {lat}, {lng}
            </h2>
            <button
                onClick={() => {
                    setSearchParams({ lat: 12, lng: 54 })
                }}
            >
                GO
            </button>
        </div>
    )
}

export default Map
