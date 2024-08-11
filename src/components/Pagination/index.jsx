import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import styles from "./Pagination.module.scss";
import { setPage } from "../../redux/slices/filterSlice";
const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ReactPaginate
        className={styles.container}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => {
          dispatch(setPage(e.selected + 1));
        }}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
