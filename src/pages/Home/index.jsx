import { useNavigate } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import styles from "./Home.module.scss";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coffeeSelector, fetchCoffee } from "../../redux/slices/coffeeSlice";
import qs from "qs";
import {
  filterSelector,
  setCategory,
  setFilters,
  setPage,
} from "../../redux/slices/filterSlice";
import Pagination from "../../components/Pagination";
import Skeleton from "../../components/CardProduct/Skeleton";

const Home = () => {
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const isSearch = useRef(false);
  const { category, sort, page, search } = useSelector(filterSelector);
  const { items, status } = useSelector(coffeeSelector);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategory(id));
  };

  const onChangePage = (num) => {
    dispatch(setPage(num));
  };

  const loadingCoffee = async () => {
    dispatch(
      fetchCoffee({
        page,
        sort,
        category,
        search,
      })
    );
  };
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      if (params.category === "0") delete params.category;
      dispatch(setFilters(params));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      loadingCoffee();
    }
    isSearch.current = false;
  }, [sort, category, search, page]);

  useEffect(() => {
    if (isMounted) {
      const queryString = qs.stringify({
        page,
        sort: sort.property,
        order: sort.direction,
        category,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sort, category, search, page]);

  const coffee = items.map((item) => <CardProduct key={item.id} {...item} />);
  const skeleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Categories category={category} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className={styles.title}>Кава</h2>
      <div className={styles.error}></div>
      <div className={styles.items}>
        {status === "loading" ? skeleton : coffee}
      </div>
      <Pagination page={page} onChangePage={onChangePage} />
    </div>
  );
};
export default Home;
