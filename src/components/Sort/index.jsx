import styles from "./Sort.module.scss";
import { ReactComponent as ArrowTop } from "../../assets/img/ArrowTop.svg";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector, setSort } from "../../redux/slices/filterSlice";
import { useRef, useState, useEffect } from "react";

const list = [
  { id: 1, name: "популярністю | asc", property: "rating", direction: "asc" },
  { id: 2, name: "популярністю | desc", property: "rating", direction: "desc" },
  { id: 3, name: "ціною | asc", property: "price", direction: "asc" },
  { id: 4, name: "ціною | desc", property: "price", direction: "desc" },
  { id: 5, name: "назвою | asc", property: "name", direction: "asc" },
  { id: 6, name: "назвою | desc", property: "name", direction: "desc" },
];

const Sort = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector(filterSelector);
  const [showPopup, setShowPopup] = useState(false);

  const sortRef = useRef();

  const selectSort = (item) => {
    dispatch(setSort(item));
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setShowPopup(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const Popup = () => {
    return (
      <div className={styles.popup}>
        <ul>
          {list.map((item, i) => (
            <li
              key={i}
              onClick={() => selectSort(item)}
              className={item.id === sort.id ? styles.active : ""}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <ArrowTop />
        <b>Сортування за:</b>
        <span ref={sortRef} onClick={() => setShowPopup(!showPopup)}>
          {sort.name}
        </span>
      </div>
      {showPopup && <Popup />}
    </div>
  );
};

export default Sort;
