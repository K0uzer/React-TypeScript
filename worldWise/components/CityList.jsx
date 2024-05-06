import styles from './CityList.module.css'
import Spinner from './Spinner'

const CityList = ({ cities, isLoading }) => {
    if (isLoading) return <Spinner />
    return (
        <ul className={styles.cityList}>
            {cities.map((item) => (
                <li>
                    <p>{item}</p>
                </li>
            ))}
        </ul>
    )
}

export default CityList
