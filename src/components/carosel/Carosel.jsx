import React from "react";
import styles from "./_carosel.module.css";
import { AiFillStar } from "react-icons/ai";
import Pics from "../../pics/shoes-removebg-preview.png";
import plane from "../../pics/aeroplane.png";
const Carosel = () => {
  return (
    <section id="carosel" className={styles.caroselBlock}>
      <aside className={styles.aside1}>
        <h2>
          purchase your <br />
          <u>shoes</u> now.
        </h2>
        <span className={styles.lorem}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officia
          <br /> accusantium saepe commodi aut maiores sed.
        </span>
        <button>Shop Now</button>
        {/* <span className={styles.plane}>
          <img src={plane} alt="plane" />
        </span> */}
        <div className={styles.starBlockContainer}>
          <div className={styles.starBlock}>
            <h4>4.3</h4>
            <span>
              <AiFillStar /> <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
          <span className={styles.review}>(11.6k Total Review)</span>
        </div>
      </aside>
      <aside className={styles.aside2}>
        <img src={Pics} alt="shoes" />
        <div className={styles.box}>
          <h5>GET UP TO 30% OFF</h5>
          <span>
            you can get 30% off this product <br />
            if you are buying now
          </span>
        </div>
      </aside>
    </section>
  );
};

export default Carosel;
