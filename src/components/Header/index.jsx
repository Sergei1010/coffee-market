import { Link, useLocation } from "react-router-dom";
import Search from "../Search";
import { ReactComponent as CartIcon } from "../../assets/img/CartIcon.svg";
import logoCoffee from "../../assets/img/Logo.png";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/slices/cartSlice";
import { useEffect, useRef } from "react";

const Header = () => {
  const { items, totalPrice, totalCount } = useSelector(cartSelector);
  const location = useLocation();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logoCoffee} alt="logo" />
            <div>
              <h1>Coffee market</h1>
              <p>магазин смачної кави</p>
            </div>
          </div>
        </Link>
        {location.pathname === "/" && <Search />}

        <div className={styles.cart}>
          {location.pathname !== "/cart.html" && (
            <Link to="/cart.html" className={styles.button}>
              <span>{totalPrice} грн</span>
              <div className={styles.delimiter}></div>
              <CartIcon className={styles.icon} />
              <span>{totalCount}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
