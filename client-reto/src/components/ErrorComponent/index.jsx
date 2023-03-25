import React from "react";
import styles from "./styles.module.scss";
import errorImage from "../../assets/error.jpg";
import serverErrorImage from "../../assets/server-error.jpg";
import { getStatusCode } from "../../redux/items/itemsSlice";
import { useSelector } from "react-redux";
import { HTTP_STATUS_CODE } from "../../redux/constants";

const Error = () => {
  const statusCode = useSelector(getStatusCode);

  return (
    <section className={styles.flex}>
      <article className={styles.errorContainer}>
        <div className={styles.imageContainer}>
          <img
            src={
              statusCode === HTTP_STATUS_CODE.CODE_404
                ? errorImage
                : serverErrorImage
            }
            alt="Error"
            className={styles.image}
          />
        </div>
        {statusCode === HTTP_STATUS_CODE.CODE_404 ? (
          <div className={styles.textContainer}>
            <h3 className={styles.title}>
              No hay publicaciones que coincidan con tu búsqueda.
            </h3>
            <ul>
              <li>
                <strong>Revisa la ortografía</strong> de la palabra.
              </li>
              <li>
                Utiliza <strong>palabras más genéricas</strong> o menos
                palabras.
              </li>
              <li>
                Navega por las categorías para encontrar un producto similar.
              </li>
            </ul>
          </div>
        ) : (
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Error de servidor.</h3>
            <ul>
              <li>
                Realiza tu busqueda <strong>nuevamente</strong>.
              </li>
              <li>
                Si el error perciste,{" "}
                <strong> intenta recargar la pagina</strong>
              </li>
              <li>Como ultima opcion contacte a Sebastian.</li>
            </ul>
          </div>
        )}
      </article>
    </section>
  );
};

export default Error;
