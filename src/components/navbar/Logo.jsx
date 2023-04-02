import React from 'react'
import Logoo from "../../pics/logo1.png"
import styles from "./_navbar.module.css"
const Logo = () => {
  return (
    <section className={styles.logoBlock}>
      <article>
        <div>
          <img
            src={Logoo}
            alt="logo"
          />
          <h2>BIZPUSH</h2>
        </div>
      </article>
    </section>
  );
}

export default Logo