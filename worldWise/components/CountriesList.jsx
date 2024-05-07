import React from 'react'

import styles from './CountriesList.module.css'
import Spinner from './Spinner'
import Message from './Message'

const MASSAGE = 'Add your first city by clicking on a city on map'

const CountriesList = ({ cities, isLoading }) => {
    if (isLoading) return <Spinner />

    if (!cities.length) return <Message message={MASSAGE} />

    return (
        <ul className={styles.countriesList}>
            {cities?.map((city) => (
                <CountryItem key={city.id} city={city} />
            ))}
        </ul>
    )
}

export default CountriesList
