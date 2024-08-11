import styles from "./CardProduct.module.scss";
import { ReactComponent as AddIcon } from "../../assets/img/AddIcon.svg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, cartSelector } from "../../redux/slices/cartSlice";

const CardProduct = ({ id, imageUrl, name, types, weight, price }) => {
  const { items } = useSelector(cartSelector);

  const typeValue = [
    { name: "в зернах", factor: 1 },
    { name: "мелена", factor: 1.2 },
  ];

  const weightValue = [
    { name: "250", factor: 1 },
    { name: "500", factor: 2 },
    { name: "1000", factor: 4 },
  ];
  const [activeCount, setActiveCount] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [activeWeight, setActiveWeight] = useState(0);
  const [activePrice, setActivePrice] = useState(price);

  const dispatch = useDispatch();

  useEffect(() => {
    const recalculationPrice = () => {
      const totalPrice =
        price * typeValue[activeType].factor * weightValue[activeWeight].factor;
      setActivePrice(totalPrice);
    };
    recalculationPrice();

    const recalculationCount = (i) => {
      const count = items
        .filter((item) => item.id === i)
        .reduce((sum, item) => sum + item.count, 0);
      setActiveCount(count);
    };
    recalculationCount(id);
  }, [activeType, activeWeight, items]);

  const onClickAdd = () => {
    const cartId = id + activeType + activeWeight;
    const item = {
      id,
      imageUrl,
      cartId,
      name,
      type: typeValue[activeType].name,
      weight: weightValue[activeWeight].name,
      price: activePrice,
    };
    dispatch(addProduct(item));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={imageUrl} alt="Coffee" />
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.selector}>
          <ul>
            {types.map((item, i) => (
              <li
                key={i}
                className={i === activeType ? styles.active : ""}
                onClick={() => setActiveType(i)}
              >
                {typeValue[item].name}
              </li>
            ))}
          </ul>
          <ul>
            {weight.map((item, i) => (
              <li
                key={i}
                className={i === activeWeight ? styles.active : ""}
                onClick={() => setActiveWeight(i)}
              >
                {weightValue[item].name} г
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>{activePrice} грн</div>
          <div className={styles.add} onClick={onClickAdd}>
            <AddIcon />
            <span>Додати</span>
            <i>{activeCount}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
