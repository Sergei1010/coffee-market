import CardProduct from "../../components/CardProduct";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>Кава</h2>
      <div className={styles.error}></div>
      <div className={styles.items}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};
export default Home;
