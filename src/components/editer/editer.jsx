import React from "react";
import styles from "./editer.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";

const Editer = ({cards}) => {
  return (
    <section className={styles.editer}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>
        {cards.map(card => (
          <CardEditForm card={card}/>
        ))}
      </ul>
    </section>
  )
}

export default Editer;