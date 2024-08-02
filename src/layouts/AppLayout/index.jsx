import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";

const AppLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
