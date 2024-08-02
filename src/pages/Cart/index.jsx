import ItemCart from "../../components/ItemCart/ItemCart";
import styles from "./Cart.module.scss";
import { ReactComponent as CartIcon } from "../../assets/img/CartIcon.svg";
import { ReactComponent as TrahsIcon } from "../../assets/img/Trash.svg";
import { ReactComponent as ArrowLeft } from "../../assets/img//ArrowLeft.svg";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <div className={styles.top}>
          <h2 className={styles.title}>
            <CartIcon />
            Корзина
          </h2>

          <div className={styles.clear}>
            <TrahsIcon />
            <span>Очистити корзину</span>
          </div>
        </div>
        <div className={styles.items}>
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </div>
        <div className={styles.bottom}>
          <div className={styles.details}>
            <span>
              Всього упаковок кави: <b>4 шт.</b>
            </span>
            <span>
              Сума замовлення: <b>2450 грн</b>
            </span>
          </div>
          <div className={styles.buttons}>
            <a className={styles.back}>
              <ArrowLeft />
              <span>На головну сторінку</span>
            </a>
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
