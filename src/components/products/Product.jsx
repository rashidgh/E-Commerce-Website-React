import React from "react";
import styles from "./_product.module.css";
import whiteShoes from "../../pics/shoes-removebg-preview.png";
import redshoes from "../../pics/redshoes-removebg-preview.png";
import blueShoe from "../../pics/blueshoe-removebg-preview.png"
import nike from "../../pics/nikeshoe-removebg-preview.png";
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
const Product = () => {
  return (
    <section id="product" className={styles.productBlock}>
      <aside>
        <h1>POPULAR PRODUCTS</h1>
      </aside>
      <aside className={styles.shoeCardBlock}>
        <div className={styles.shoeCard}>
          <aside className={styles.shoeCardaside1}>
            <span className={styles.heartIcon}>
              <BsHeart />
            </span>
            <img src={whiteShoes} alt="shoes" />
          </aside>
          <aside className={styles.shoeCardaside2}>
            <div className={styles.div1}>
              <span className={styles.shoerating}>(11.6k Total Review)</span>
              <span className={styles.star}>
                <AiFillStar />
              </span>
            </div>
            <div className={styles.div2}>Nike Running Shoe</div>
            <div className={styles.div3}>
              <h3>$100</h3>
              <div>
                <span style={{ textDecoration: "line-through" }}>500-</span>
                <span
                  style={{ fontSize: "13px", textDecoration: "line-through" }}
                >
                  Sold Out
                </span>
              </div>
              <button>Buy Now</button>
            </div>
          </aside>
        </div>
        {/* ! */}
        <div className={styles.shoeCard}>
          <aside className={styles.shoeCardaside1}>
            <span className={styles.heartIcon}>
              <BsHeart />
            </span>
            <img style={{height:"190%"}} src={redshoes} alt="shoes" />
          </aside>
          <aside className={styles.shoeCardaside2}>
            <div className={styles.div1}>
              <span className={styles.shoerating}>(11.6k Total Review)</span>
              <span className={styles.star}>
                <AiFillStar />
              </span>
            </div>
            <div className={styles.div2}>Nike Shoe Airmax</div>
            <div className={styles.div3}>
              <h3>$115</h3>
              <div>
                <span style={{ textDecoration: "line-through" }}>100-</span>
                <span
                  style={{ fontSize: "13px", textDecoration: "line-through" }}
                >
                  Sold Out
                </span>
              </div>
              <button>Buy Now</button>
            </div>
          </aside>
        </div>
        {/* ! */}
        <div className={styles.shoeCard}>
          <aside className={styles.shoeCardaside1}>
            <span className={styles.heartIcon}>
              <BsHeart />
            </span>
            <img style={{height:"70%"}} src={nike} alt="shoes" />
          </aside>
          <aside className={styles.shoeCardaside2}>
            <div className={styles.div1}>
              <span className={styles.shoerating}>(11.6k Total Review)</span>
              <span className={styles.star}>
                <AiFillStar />
              </span>
            </div>
            <div className={styles.div2}>Jordan Sneaker</div>
            <div className={styles.div3}>
              <h3>$50</h3>
              <div>
                <span style={{ textDecoration: "line-through" }}>1500-</span>
                <span
                  style={{ fontSize: "13px", textDecoration: "line-through" }}
                >
                  Sold Out
                </span>
              </div>
              <button>Buy Now</button>
            </div>
          </aside>
        </div>
        {/* ! */}
        <div className={styles.shoeCard}>
          <aside className={styles.shoeCardaside1}>
            <span className={styles.heartIcon}>
              <BsHeart />
            </span>
            <img style={{height:"90%"}} src={blueShoe} alt="shoes" />
          </aside>
          <aside className={styles.shoeCardaside2}>
            <div className={styles.div1}>
              <span className={styles.shoerating}>(11.6k Total Review)</span>
              <span className={styles.star}>
                <AiFillStar />
              </span>
            </div>
            <div className={styles.div2}>Nike Running Shoe2</div>
            <div className={styles.div3}>
              <h3>$220</h3>
              <div>
                <span style={{ textDecoration: "line-through" }}>210-</span>
                <span
                  style={{ fontSize: "13px", textDecoration: "line-through" }}
                >
                  Sold Out
                </span>
              </div>
              <button>Buy Now</button>
            </div>
          </aside>
        </div>
      </aside>
    </section>
  );
};

export default Product;
