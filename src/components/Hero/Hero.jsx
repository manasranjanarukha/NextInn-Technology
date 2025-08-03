// src/components/Hero.jsx
import styles from "./Hero.module.css";
// import BG from "../../assets/images/background.webp";
import React from "react";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <h1>NextInn Technology</h1>
        <div className="line"></div>
        <p>Innovating the Future of IT Solutions</p>
        <p>
          Get expert Mobile App or Web Development services at a budget-friendly
          cost
        </p>
        <form action="" className={styles.heroForm}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Name" />
            <input type="emain" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input placeholder="Message"></input>
          </div>
          <button type="submit" className={styles.formSubmitBtn}>
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
