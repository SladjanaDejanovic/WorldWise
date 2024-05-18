import Spinner from "./Spinner";
import CountryItem from "./CityItem";
import Message from "./Message";
import styles from "./CountryList.module.css";

function CountryList({ cities, countries, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message={""} />;

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
