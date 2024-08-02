import styles from "./Categories.module.scss";
const Categories = () => {
  const categories = ["арабіка", "робуста", "купаж"];
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.active}>Вся</li>
        {categories.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
