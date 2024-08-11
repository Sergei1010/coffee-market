import styles from "./EmptyCart.module.scss";
import emptyCart from "../../assets/img/EmptyCart.png";
import BackButton from "../BackButton";
const EmptyCart = () => {
  return (
    <div className={styles.container}>
      <h2>Кошик пустий</h2>
      <h3>Ви не вибрали жодної упаковки кави</h3>
      <img src={emptyCart} alt="Пустий кошик" />
      <p>Щоб збробити замовлення, перейдіть на головну сторінку</p>
      <BackButton />
    </div>
  );
};

export default EmptyCart;
