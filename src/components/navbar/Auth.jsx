import React from 'react';
import styles from "./_navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
const Auth = () => {
  return (
    <section className={styles.authBlock}>

        <div>
          <span className={styles.searchBar}>
            <FiSearch />
          </span>
          <span className={styles.cart}>
            <AiOutlineShoppingCart />
            <span>0</span>
          </span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU"
            alt="Login"
          />
        </div>

    </section>
  );
}

export default Auth