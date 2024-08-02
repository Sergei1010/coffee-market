import styles from "./CardProduct.module.scss";
import { ReactComponent as AddIcon } from "../../assets/img/AddIcon.svg";

const CardProduct = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src="img/items/1.jpg" alt="123" />
        <h4 className={styles.title}>Кава</h4>
        <div className={styles.selector}>
          <ul>
            <li className={styles.active}>мелена</li>
            <li>в зернах</li>
          </ul>
          <ul>
            <li className={styles.active}>250 г</li>
            <li>500 г</li>
            <li>1000 г</li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>500 грн</div>
          <div className={styles.add}>
            <AddIcon />
            <span>Додати</span>
            <i>5</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
