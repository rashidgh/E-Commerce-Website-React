import React from "react";
import pic from "../../../pics/graph.jpg";
import pic2 from "../../../pics/graph2.webp";
import pic3 from "../../../pics/graph3.png";

import Graph from "../../graph/Graph";
import styles from "./_body.module.css";
const Aside3 = () => {
  return (
    <section id="bodyAside3" className={styles.aside3Block}>
      <aside className={styles.topBar}>
        <article>
          <div className={styles.div1}>
            <aside className={styles.aside1}>
              <li style={{ listStyle: "none" }}>Total Sales</li>
              <h2>$281.90</h2>
            </aside>
            <aside className={styles.aside2}>
              <img src={pic} alt="" />
              
            </aside>
          </div>
          <div className={styles.div22}>
            <p>6 total orders</p>
            <p>View report</p>
          </div>
        </article>

        <article>
          <div className={styles.div1}>
            <aside className={styles.aside1}>
              <li style={{ listStyle: "none" }}>Total Seesion</li>
              <h2>456</h2>
            </aside>
            <aside className={styles.aside2}>
              <img src={pic2} alt="" />
            </aside>
          </div>
          <div className={styles.div22}>
            <p
              style={{
                color: " #8833FF",
                padding: "3px 6px",
                background: "rgba(136, 51, 255, 0.1)",
                borderRadius: "5px",
              }}
            >
              Live
            </p>
            <p>
              <div></div>
              <p>4 visitors</p>
            </p>
            <p>
              <div></div>
              <p>Returning</p>
            </p>
          </div>
        </article>

        <article>
          <div className={styles.div1}>
            <aside className={styles.aside1}>
              <li style={{ listStyle: "none" }}>Total Sales</li>
              <h2>$281.90</h2>
            </aside>
            <aside className={styles.aside2}>
              <img src={pic3} alt="" />
            </aside>
          </div>
          <div className={styles.div22}>
            <p className={styles.dot1}>
              <div></div>
              <li style={{ listStyle: "none" }}>First Time</li>
            </p>
            <p className={styles.dot2}>
              <div></div>
              <li style={{ listStyle: "none" }}>Retuning</li>
            </p>
          </div>
        </article>
      </aside>
      <aside className={styles.footer}>
        <article>
          <aside className={styles.aside1}>
            <li style={{ listStyle: "none" }}>Actions</li>
            <p>11.32</p>
            <p>11.32</p>
            <p>11.32</p>
            <p>11.32</p>
            <p>11.32</p>
            <p>11.32</p>
            <li className={styles.line}></li>
          </aside>

          <aside className={styles.aside2}>
            <p style={{ color: "crimson" }}>Orders</p>
            <p>
              New Categeory Added <br /> mobiles phones
            </p>
            <p>
              New Categeory Added <br /> mobiles phones
            </p>
            <p>
              New Categeory Added <br /> mobiles phones
            </p>
            <p>
              New Categeory Added <br /> mobiles phones
            </p>
            <p>
              New Categeory Added <br /> mobiles phones
            </p>
            <p>
              New Categeory Added <br /> mobiles phones
            </p>
          </aside>
        </article>
      </aside>
    </section>
  );
};

export default Aside3;
