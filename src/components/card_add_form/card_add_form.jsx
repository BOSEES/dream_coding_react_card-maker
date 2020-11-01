import React from "react";
import styles from "./card_add_form.module.css";
import Button from  "../button/button.jsx";
import ImageFileInput from "../image_file_input/image_file_input";

const CardAddForm = ({onAdd}) => {
  const formRef = React.useRef();
  const nameRef = React.useRef();
  const companyRef= React.useRef();
  const themeRef = React.useRef();
  const titleRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id : Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      messagee: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    }
    formRef.current.reset();
    onAdd(card);
  }

  return(
  <form ref={formRef} className={styles.form}>
    <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name"/>
    <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="Company"/>
    <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
      <option placeholder="light">light</option>
      <option placeholder="dark">dark</option>
      <option placeholder="colorful">colorful</option>
    </select>
    <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title"/>
    <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email"/>
    <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message" />
    <div className={styles.fileInput}>
      <ImageFileInput />
    </div>
    <Button name="Add" onClick={onSubmit}/>
  </form>
  )
}

export default CardAddForm;