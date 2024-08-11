import styles from "./ItemCart.module.scss";
import { ReactComponent as CartItemButton } from "../../assets/img/CartItemButton.svg";
import { useDispatch } from "react-redux";
import {
  increaseProduct,
  reduceProduct,
  removeProduct,
} from "../../redux/slices/cartSlice";

const ItemCart = ({ cartId, name, type, weight, price, count }) => {
  const dispatch = useDispatch();
  const totalPrice = price * count;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="img/items/1.jpg" alt="" />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>
          {weight}г {type}
        </p>
      </div>
      <div className={styles.count}>
        <div
          onClick={() => dispatch(reduceProduct(cartId))}
          className={count > 1 ? styles.minus : styles.disable}
        >
          <CartItemButton />
        </div>
        <b>{count}</b>
        <div
          onClick={() => dispatch(increaseProduct(cartId))}
          className={styles.plus}
        >
          <CartItemButton />
        </div>
      </div>
      <div className={styles.price}>
        <b>{totalPrice} грн</b>
      </div>
      <div
        onClick={() => dispatch(removeProduct(cartId))}
        className={styles.remove}
      >
        <div className={styles.cross}>
          <CartItemButton />
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
