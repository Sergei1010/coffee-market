import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/img/SearchIcon.svg";
import { ReactComponent as Cross } from "../../assets/img/Cross.svg";
const Search = () => {
  return (
    <div className={styles.container}>
      <SearchIcon className={styles.search} />
      <input type="text" className={styles.input} />
      <Cross className={styles.clear} />
    </div>
  );
};

export default Search;
