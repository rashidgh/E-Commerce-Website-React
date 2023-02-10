import React from 'react'
import styles from "./_navbar.module.css";
const Menu = () => {
  return (
    <section className={styles.menuBlock}>
          <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
    </section>
  );
}

export default Menu