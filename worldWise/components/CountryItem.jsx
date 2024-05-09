import styles from "./CountryItem.module.css";

function CountryItem(props) {
    console.log(props)
    return (
        <li className={styles.countryItem}>
            <span>{props.city.emoji}</span>
            <span>{props.city.country}</span>
        </li>
    )
}

export default CountryItem;
