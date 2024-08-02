import styles from "./Button.module.scss";

const Button = ({ add, cart, children }) => {
  return <button className={styles.container}>{children}</button>;
};

export default Button;
