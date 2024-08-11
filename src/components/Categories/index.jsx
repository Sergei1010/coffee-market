import styles from "./Categories.module.scss";
const Categories = ({ category = 0, onChangeCategory }) => {
  const list = [
    { name: "Всі", category: 0 },
    { name: "Арабіка", category: 1 },
    { name: "Робуста", category: 2 },
    { name: "Купаж", category: 3 },
  ];

  return (
    <div className={styles.container}>
      <ul>
        {list.map((item, i) => (
          <li
            onClick={() => onChangeCategory(i)}
            key={i}
            className={i === category ? styles.active : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
