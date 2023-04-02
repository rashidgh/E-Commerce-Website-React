import React from "react";
import styles from "./_body.module.css";
import { GiBeachBag } from "react-icons/gi";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

import airpods from "../../../pics/airpods.png";
import blackSmartWatch from "../../../pics/blackWatch.png";
import ledTv from "../../../pics/ledTv-removebg-preview.png";
import pinkWatch from "../../../pics/smartWatch-removebg-preview.png";
import mobile from "../../../pics/mobile-removebg-preview.png";
import speaker from "../../../pics/buffer-removebg-preview.png";
import tablet from "../../../pics/tablet-removebg-preview.png";
import monitor from "../../../pics/AppleComputer.png";
import whiteWatch from "../../../pics/whiteSmartWatch.png";
import macbookSilver from "../../../pics/silvermacbook-removebg-preview.png";
import laptop from "../../../pics/laptop__1_-removebg-preview.png";
import googleWatch from "../../../pics/circle-removebg-preview.png";

const Aside2 = () => {
  return (
    <section id="bodyAside2" className={styles.aside2Block}>
      {/* !Aside1 */}
      <aside className={styles.aside1}>
        <div className={styles.div1}>
          <span>
            <GiBeachBag />
          </span>
          <h4>Products</h4>
        </div>
        <div className={styles.div2}>
          <ul>
            <li style={{ color: "#8833FF" }}>Active</li>
            <li id="draftAppbar">Draft</li>
            <li id="draftAppbar">Assembly</li>
          </ul>
        </div>
        <div className={styles.div3} id="bodyAside2div3">
          <div id="addProduct">
            <span>
              <AiFillPlusCircle />
            </span>
            <li id="addProduct">Add Product</li>
          </div>
        </div>
      </aside>
      {/* !Aside2 */}
      <aside className={styles.aside2}>
        <div className={styles.div1}>
          <span style={{ display: "flex" }}>
            <BsCheckCircleFill />
            <li
              style={{ listStyle: "none", fontSize: "16px", marginLeft: "8px" }}
            >
              Select All
            </li>
          </span>
        </div>
        <div className={styles.div2}>
          <table>
            <th>
              <div
                style={{
                  borderTopLeftRadius: "4px",
                  borderBottomLeftRadius: "4px",
                }}
              >
                <span
                  style={{
                    margin: "4px",
                    color: "#C3CAD9",
                  }}
                >
                  <IoFilter />
                </span>
                <li id="bodyAside2li" style={{ listStyle: "none" }}>
                  Filters
                </li>
              </div>
            </th>
            <th>
              <div>
                <span style={{ margin: "4px", color: "#C3CAD9" }}>
                  <AiOutlineSearch />
                </span>
                <li id="bodyAside2li" style={{ listStyle: "none" }}>
                  Filters
                </li>
              </div>
            </th>
            <th>
              <div>
                <span style={{ margin: "4px", color: "#C3CAD9" }}>
                  <HiPencil />
                </span>
                <li id="bodyAside2li" style={{ listStyle: "none" }}>
                  Filters
                </li>
              </div>
            </th>
            <th>
              <div
                style={{
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
              >
                <span style={{ margin: "4px", color: "#C3CAD9" }}>
                  <MdDelete />
                </span>
                <li id="bodyAside2li" style={{ listStyle: "none" }}>
                  Filters
                </li>
              </div>
            </th>
          </table>
        </div>
        <div className={styles.div3}>
          <table>
            <th>
              <div
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  borderTopLeftRadius: "4px",
                  borderBottomLeftRadius: "4px",
                }}
              >
                <FiMenu />
              </div>
            </th>
            <th>
              <div
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
              >
                <CgMenuGridR />
              </div>
            </th>
          </table>
        </div>
      </aside>

      {/* !Product card */}
      <section id="bodyAside3card">
        <aside className={styles.aside3} id="bodyAside2aside3">
          <div className={styles.divBlock}>
            <div className={styles.div1}>
              <span style={{ color: "white", background: "#8833FF" }}>
                <TiTick />
              </span>
              <img src={airpods} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Apple Air Pods 2</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img
                style={{ height: "80%", width: "80%" }}
                src={blackSmartWatch}
                alt=""
              />
            </div>
            <div className={styles.div2}>
              <span>Samsung Smart Watch</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img style={{ width: "140%" }} src={ledTv} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Apple Monitor Pro</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img src={pinkWatch} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Apple Watch Series 4</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>
        </aside>

        {/* ! */}
        <aside className={styles.aside3}>
          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img
                style={{ width: "90%", height: "90%" }}
                src={mobile}
                alt=""
              />
            </div>
            <div className={styles.div2}>
              <span>Google Pixel 4 XL</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img src={speaker} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Amazon Smart Speaker</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img style={{ height: "80%" }} src={macbookSilver} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Apple Macbook Pro 16</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img style={{ width: "120%" }} src={tablet} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Apple iPad 10.2</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>
        </aside>

        {/* ! */}
        <aside className={styles.aside3}>
          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img src={laptop} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Microsoft Surface Book</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img src={googleWatch} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Google Nest</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img style={{ width: "80%" }} src={monitor} alt="" />
            </div>
            <div className={styles.div2}>
              <span>Apple iMac Pro</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>

          <div className={styles.divBlock}>
            <div className={styles.div1}>
              {/* <span>
              <TiTick />
            </span> */}
              <img
                style={{ width: "80%", height: "90%" }}
                src={whiteWatch}
                alt=""
              />
            </div>
            <div className={styles.div2}>
              <span>Samsung Smart Watch</span>
            </div>
            <div className={styles.div3}>
              <span>$600</span>
            </div>
          </div>
        </aside>
      </section>
      <li id="aside2Li">Load More</li>
    </section>
  );
};

export default Aside2;
