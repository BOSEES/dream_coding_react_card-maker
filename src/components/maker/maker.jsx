import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Preview from "../preview/preview";
import Editer from "../editer/editer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
      id: "bosees1",
      name: "yeoung-il",
      company: "nandnadnan",
      theme: "dark",
      title: "software engineer",
      email:"rladuddlf3@aasd",
      message:"Hello World",
      fileName:"asdsad",
      fileURL:null
    },
    {
      id: "bosees2",
      name: "yeoung-il",
      company: "nfdfd",
      theme: "light",
      title: "software engineer",
      email:"rladuddlf3@aasd",
      message:"Hello World",
      fileName:"asdsad",
      fileURL:"asdasd"
    },
    {
      id: "bosees3",
      name: "yeoung-il",
      company: "dasdas",
      theme: "colorful",
      title: "software engineer",
      email:"rladuddlf3@aasd",
      message:"Hello World",
      fileName:"asdsad",
      fileURL: null
    }
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  }
  return(
    <section className={styles.maker}>
    <Header onLogout={logout}/>
    <div className={styles.container}>
      <Editer cards={cards} addCard={addCard}/>
      <Preview cards={cards}/>
    </div>
    <Footer />
    </section>
  )
};

export default Maker;