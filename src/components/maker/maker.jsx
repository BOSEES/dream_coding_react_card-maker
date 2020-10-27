import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";

const Maker = ({authservice}) => {
  const logout = () => {
    authservice.logout();
  }

  return(
    <section className={styles.maker}>
    <Header onClick={logout}/>
    <Footer />
    </section>
  )
};

export default Maker;