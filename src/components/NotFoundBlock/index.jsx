import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.container}>
      <h2>Помилка 404</h2>
      <h3>Такої сторінки не існує</h3>
      <p>Спробуйте ввести іншу адресу чи перейдіть на головну сторінку</p>
    </div>
  );
};

export default NotFoundBlock;
