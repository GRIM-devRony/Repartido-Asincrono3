import React from "react";
import Carrusel from "./componentes/MiComponente";
import { useState } from "react";
import { Modal, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./assets/css/App.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: "400px",
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  textfield: {
    width: "100%",
  },
  button: {
    textAlign: "center",
    padding: "4px",
    borderRadius: "3px",
    fontSize: "17px",
    border: "none",
  },
}));

const App = () => {
  const styles = useStyles();

  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const body = (
    <div className={styles.modal}>
      <div align="center">
        <h2>Formulario</h2>
      </div>
      <TextField label="Usuario" className={styles.textfield} />
      <br />
      <TextField
        label="Contraseña"
        type="password"
        className={styles.textfield}
      />
      <br /> <br />
      <div align="right">
        <button className={styles.button}>Enviar</button>
        <button className={styles.button} onClick={() => abrirCerrarModal()}>
          Cerrar
        </button>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="header">
        <input type="submit" value="MODAL" onClick={() => abrirCerrarModal()} />
        <Modal open={modal} onClose={abrirCerrarModal}>
          {body}
        </Modal>
      </div>
      <div className="carrusel"></div>
      <Carrusel />
    </div>
  );
};

export default App;
