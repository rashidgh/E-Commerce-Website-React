import React from 'react';
import styles from "./_body.module.css";
import { FaCompass } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { IoBusinessOutline } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import anushka from "../../../pics/anushka.png";
import virat from "../../../pics/virat.png";
import rohit from "../../../pics/rohit.png";
import nora from "../../../pics/noorafatehi.png";
const Aside1 = () => {
  return (
    <section id='bodyAside1' className={styles.body}>
      <aside className={styles.aside1}>
        <div className={styles.div1}>
          <span>
            <FaCompass />
          </span>
          <span>
            <FaStar />
          </span>
          <span className={styles.msgIconn}>
            <BsMessenger />
            <div></div>
          </span>
          <span>
            <TbArrowWaveRightUp />
          </span>
          <span>
            <BiWorld />
          </span>
          <span>
            <IoBusinessOutline />
          </span>
        </div>

        <div className={styles.div2}>
          <span>
            <IoMdAddCircle />
          </span>
          <span className={styles.anushka}>
            <img src={anushka} alt="" />
          </span>
          <span className={styles.msgIcon}>
            <img src={virat} alt="" />
            <div></div>
          </span>
          <span className={styles.rohit}>
            <img src={rohit} alt="" />
          </span>
          <span className={styles.nora}>
            <img src={nora} alt="" />
          </span>
        </div>
      </aside>
    </section>
  );
}

export default Aside1;