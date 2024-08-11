import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";
import NotFoundBlock from "../../components/NotFoundBlock";
import styles from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <NotFoundBlock />
      <Link to="/">
        <BackButton />
      </Link>
    </div>
  );
};
export default NotFound;
