import styles from "./ItemCart.module.scss";
import { ReactComponent as CartItemButton } from "../../assets/img/CartItemButton.svg";

const ItemCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="img/items/1.jpg" alt="" />
      </div>
      <div className={styles.info}>
        <h3>Costa rica </h3>
        <p>500г мелена</p>
      </div>
      <div className={styles.count}>
        <div className={styles.minus}>
          <CartItemButton />
        </div>
        <b>22</b>
        <div className={styles.plus}>
          <CartItemButton />
        </div>
      </div>
      <div className={styles.price}>
        <b>500 грн</b>
      </div>
      <div className={styles.remove}>
        <div className={styles.cross}>
          <CartItemButton />
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
