import React from "react";
import styles from "./_body.module.css";
import Aside1 from "./Aside1";
import Aside2 from "./Aside2";
import Aside3 from "./Aside3";

const Main = () => {
  return (
    <div className={styles.mainBlock}>
      <Aside1 />
      <Aside2 />
      <Aside3 />
    </div>
  );
};

export default Main;
