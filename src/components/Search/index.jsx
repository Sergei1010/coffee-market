import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/img/SearchIcon.svg";
import { ReactComponent as Cross } from "../../assets/img/Cross.svg";
import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector, setSearch } from "../../redux/slices/filterSlice";
import { debounce } from "lodash";
const Search = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch(filterSelector);
  const { search } = useSelector(filterSelector);

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 500),
    []
  );

  const onChangeSearch = (str) => {
    setValue(str);
    updateSearchValue(str);
  };

  const clearSearch = () => {
    dispatch(setSearch(""));
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.container}>
      <SearchIcon className={styles.search} />
      <input
        ref={inputRef}
        onChange={(e) => onChangeSearch(e.target.value)}
        placeholder={"Пошук кави..."}
        value={value}
        className={styles.input}
      />
      {search && (
        <Cross onClick={() => clearSearch()} className={styles.clear} />
      )}
    </div>
  );
};

export default Search;
