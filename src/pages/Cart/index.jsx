import ItemCart from "../../components/ItemCart/ItemCart";
import styles from "./Cart.module.scss";
import { ReactComponent as CartIcon } from "../../assets/img/CartIcon.svg";
import { ReactComponent as TrahsIcon } from "../../assets/img/Trash.svg";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector, clearCart } from "../../redux/slices/cartSlice";
import BackButton from "../../components/BackButton";
import EmptyCart from "../../components/EmptyCart";

const Cart = () => {
  const { totalPrice, totalCount, items } = useSelector(cartSelector);
  const dispatch = useDispatch();

  if (!totalPrice) return <EmptyCart />;

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <div className={styles.top}>
          <h2 className={styles.title}>
            <CartIcon />
            Корзина
          </h2>

          <div onClick={() => dispatch(clearCart())} className={styles.clear}>
            <TrahsIcon />
            <span>Очистити корзину</span>
          </div>
        </div>
        <div className={styles.items}>
          {items.map((item) => (
            <ItemCart key={item.cartId} {...item} />
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.details}>
            <span>
              Всього упаковок кави: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сума замовлення: <b>{totalPrice} грн</b>
            </span>
          </div>
          <div className={styles.buttons}>
            <BackButton />
            <div className={styles.pay}>
              <span>Замовити</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
