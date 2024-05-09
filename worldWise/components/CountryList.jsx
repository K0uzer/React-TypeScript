import Spinner from './Spinner'
import Message from './Message'
import CountryItem from './CountryItem'

import styles from './CountryList.module.css'

const MESSAGE = 'Add your first city by clicking on a city on map'

const CountryList = ({ cities, isLoading }) => {
    if (isLoading) return <Spinner />

    if (!cities.length) return <Message message={MESSAGE} />

    const countries = cities.reduce((acc, city) => {
        if (acc.map((el) => el.country).includes(city.country))
            return [...acc, { country: city.country, emoji: city.emoji }]
        else return acc
    }, [])

    return (
        <ul className={styles.countryList}>
            {cities?.map((city) => (
                <CountryItem key={city.id} city={city} />
            ))}
        </ul>
    )
}

export default CountryList
