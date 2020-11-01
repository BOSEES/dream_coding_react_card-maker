import React from "react";
import styles from "./editer.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editer = ({cards, addCard}) => {
  return (
    <section className={styles.editer}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>
        {cards.map(card => (
          <CardEditForm key={card.id} card={card}/>
        ))}
        <CardAddForm onAdd={addCard}/>
      </ul>
    </section>
  )
}

export default Editer;