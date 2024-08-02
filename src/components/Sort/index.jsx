import styles from "./Sort.module.scss";
import { ReactComponent as ArrowTop } from "../../assets/img/ArrowTop.svg";
import cn from "classnames";

const list = [
  { id: 1, name: "популярністю | asc", property: "rating", direction: "asc" },
  { id: 2, name: "популярністю | desc", property: "rating", direction: "desc" },
  { id: 3, name: "ціною | asc", property: "price", direction: "asc" },
  { id: 4, name: "ціною | desc", property: "price", direction: "desc" },
  { id: 5, name: "назвою | asc", property: "name", direction: "asc" },
  { id: 6, name: "назвою | desc", property: "name", direction: "desc" },
];

const active = true;

const Popup = () => {
  return (
    <div className={styles.popup}>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Sort = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <ArrowTop />
        <b>Сортування за:</b>
        <span>популярністю</span>
      </div>
      <Popup />
    </div>
  );
};

export default Sort;
