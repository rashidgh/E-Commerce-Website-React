import React from "react";
import styles from "./_appBar.module.css"
import { FcMenu } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { BsBellFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { MdSearch } from "react-icons/md";
const AppBar = () => {
  return (
    <section id="appBarBlock" className={styles.appBarBlock}>
      <aside id="appBarAside1" className={styles.aside1}>
        <span>
          <FcMenu />
        </span>
        <h4>Constructor</h4>
      </aside>
      <aside id="appBarAside2" className={styles.aside2}>
        <ul>
          <li>Dashboard</li>
          <li>About Us</li>
          <li>News</li>
          <li>User Policy</li>
          <li>Contacts</li>
          <li>
            <BsThreeDots />
          </li>
        </ul>
      </aside>
      <aside id="appBarAside3" className={styles.aside3}>
        <span>
          <MdSearch />
        </span>
        <input
          id="appBarInput"
          type="text"
          placeholder="Search Transaction and Documents"
        />
      </aside>
      <span id="appBarSearchparent">
        <span>
          <MdSearch />
        </span>
      </span>
      <aside id="appBarAside4" className={styles.aside4}>
        <span className={styles.icon1}>
          <HiUser />
        </span>
        <li id="clayStoneAppbar">Clay Santos</li>
        <span id="clayStoneRing" className={styles.icon2}>
          <BsBellFill />
          <div></div>
        </span>
        <span id="crossAppbsr" className={styles.icon3}>
          <RxCross2 />
        </span>
      </aside>
    </section>
  );
};

export default AppBar;
