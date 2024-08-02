import { Link } from "react-router-dom";
import Search from "../Search";
import { ReactComponent as CartIcon } from "../../assets/img/CartIcon.svg";
import logoCoffee from "../../assets/img/Logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link>
          <div className={styles.logo}>
            <img src={logoCoffee} alt="logo" />
            <div>
              <h1>Coffee market</h1>
              <p>магазин смачної кави</p>
            </div>
          </div>
        </Link>
        <Search />

        <div className={styles.cart}>
          <Link className={styles.button}>
            <span>1200 грн</span>
            <div className={styles.delimiter}></div>
            <CartIcon className={styles.icon} />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
