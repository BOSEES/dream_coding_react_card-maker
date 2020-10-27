import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Preview from "../preview/preview";
import Editer from "../editer/editer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";

const Maker = ({authService}) => {
  const history = useHistory();
  const logout = () => {
    authService.logout();
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        history.push("/")
      }
    })
  });

  return(
    <section className={styles.maker}>
    <Header onLogout={logout}/>
    <div className={styles.container}>
      <Editer />
      <Preview />
    </div>
    <Footer />
    </section>
  )
};

export default Maker;