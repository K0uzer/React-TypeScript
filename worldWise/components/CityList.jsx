import Spinner from './Spinner'
import CityItem from './CityItem'
import Message from './Message'

import styles from './CityList.module.css'

const MESSAGE = 'Add your first city by clicking on a city on map'

const CityList = ({ cities, isLoading }) => {
    if (isLoading) return <Spinner />

    if (!cities.length) return <Message message={MESSAGE} />

    return (
        <ul className={styles.cityList}>
            {cities?.map((city) => (
                <CityItem key={city.id} city={city} />
            ))}
        </ul>
    )
}

export default CityList
