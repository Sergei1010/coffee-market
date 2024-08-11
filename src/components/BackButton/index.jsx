import styles from "./BackButton.module.scss";
import { ReactComponent as ArrowLeft } from "../../assets/img//ArrowLeft.svg";
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <Link to="/" className={styles.container}>
      <ArrowLeft />
      <span>На головну сторінку</span>
    </Link>
  );
};

export default BackButton;
